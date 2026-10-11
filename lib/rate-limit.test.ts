import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkRateLimit, RATE_LIMITS } from './rate-limit.ts';

test('chamadas de analytics não gastam a cota dos formulários', () => {
  const ip = '10.0.0.1';
  // Cada página visitada chama /api/identify.
  for (let i = 0; i < 10; i++) {
    assert.equal(checkRateLimit(ip, RATE_LIMITS.identify).success, true);
  }
  assert.equal(checkRateLimit(ip, RATE_LIMITS.contactForm).success, true);
  assert.equal(checkRateLimit(ip, RATE_LIMITS.newsletter).success, true);
});

test('cada limite conta só as próprias chamadas', () => {
  const ip = '10.0.0.2';
  for (let i = 0; i < RATE_LIMITS.contactForm.maxRequests; i++) {
    assert.equal(checkRateLimit(ip, RATE_LIMITS.contactForm).success, true);
  }
  assert.equal(checkRateLimit(ip, RATE_LIMITS.contactForm).success, false);
  // Estourar o formulário de contato não bloqueia a newsletter.
  assert.equal(checkRateLimit(ip, RATE_LIMITS.newsletter).success, true);
});

test('IPs diferentes têm contagens separadas', () => {
  for (let i = 0; i < RATE_LIMITS.newsletter.maxRequests; i++) {
    checkRateLimit('10.0.0.3', RATE_LIMITS.newsletter);
  }
  assert.equal(checkRateLimit('10.0.0.3', RATE_LIMITS.newsletter).success, false);
  assert.equal(checkRateLimit('10.0.0.4', RATE_LIMITS.newsletter).success, true);
});
