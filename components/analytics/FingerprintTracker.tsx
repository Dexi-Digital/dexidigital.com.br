'use client';

import { useEffect, useRef } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { IdentificationPayload, QUERY_PARAM_EMAIL, COOKIE_VISITOR_ID } from '@/lib/analytics';

export default function FingerprintTracker() {
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const initFingerprint = async () => {
            try {
                // 1. Load FingerprintJS
                const fp = await FingerprintJS.load();
                const result = await fp.get();
                const visitorId = result.visitorId;

                // 2. Check for URL Hacks (Deanonymization)
                const searchParams = new URLSearchParams(window.location.search);
                const emailFromUrl = searchParams.get(QUERY_PARAM_EMAIL);

                // 3. Prepare Payload
                const payload: IdentificationPayload = {
                    visitorId,
                    url: window.location.href,
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString(),
                    email: emailFromUrl || undefined,
                };

                // 4. Send to Internal API
                await fetch('/api/identify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                // 5. Persist Visitor ID (Optional, for easy client-side access)
                localStorage.setItem(COOKIE_VISITOR_ID, visitorId);

                // Log for debugging (remove in production)
                console.log('[Dexi Analytics] Visitor identified:', visitorId, emailFromUrl ? `(Email: ${emailFromUrl})` : '(Anonymous)');

            } catch (error) {
                console.error('[Dexi Analytics] Failed to initialize fingerprinting:', error);
            }
        };

        // Run on idle to not block main thread
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(() => initFingerprint());
        } else {
            setTimeout(initFingerprint, 500);
        }
    }, []);

    return null; // Headless component
}
