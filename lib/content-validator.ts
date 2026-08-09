export interface ValidatorReport {
  hasQuickAnswer: boolean;
  hasQuestionH2: boolean;
  hasNamedSourceClaim: boolean;
  hasEnoughInternalLinks: boolean;
  passesClinicalSafety: boolean;
  passed: boolean;
}

const CLINICAL_CLAIM_TERMS = [
  'cura', 'elimina', 'garante resultado', 'sem risco', '100% seguro', 'garantido',
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function checkQuickAnswer(content: string): boolean {
  const match = content.match(/\*\*Resposta rápida:\*\*\s*([\s\S]+?)(?:\n\n|\n#|$)/);
  if (!match) return false;
  const wordCount = countWords(match[1]);
  return wordCount >= 30 && wordCount <= 70;
}

function checkQuestionH2(content: string): boolean {
  const headings = content.match(/^##\s+.+$/gm) || [];
  return headings.some((h) => h.trim().endsWith('?'));
}

function checkNamedSourceClaim(content: string): boolean {
  const sourcePattern = /(segundo|de acordo com|conforme)\s+[^\n.]{3,80}/gi;
  const matches = content.match(sourcePattern) || [];
  return matches.some((m) => {
    if (/\d/.test(m)) return true;
    const idx = content.indexOf(m);
    return /\d/.test(content.slice(idx, idx + 120));
  });
}

function checkInternalLinks(content: string, pillarLink: string): boolean {
  if (!pillarLink) return true;
  const escaped = pillarLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\]\\(${escaped}\\)`, 'g');
  const matches = content.match(pattern) || [];
  return matches.length >= 2;
}

function checkClinicalSafety(content: string, vertical: string): boolean {
  if (vertical !== 'Clínicas de procedimentos') return true;
  const normalized = content
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  return !CLINICAL_CLAIM_TERMS.some((term) => normalized.includes(term));
}

export function validatePost(content: string, vertical: string, pillarLink: string): ValidatorReport {
  const hasQuickAnswer = checkQuickAnswer(content);
  const hasQuestionH2 = checkQuestionH2(content);
  const hasNamedSourceClaim = checkNamedSourceClaim(content);
  const hasEnoughInternalLinks = checkInternalLinks(content, pillarLink);
  const passesClinicalSafety = checkClinicalSafety(content, vertical);

  return {
    hasQuickAnswer,
    hasQuestionH2,
    hasNamedSourceClaim,
    hasEnoughInternalLinks,
    passesClinicalSafety,
    passed:
      hasQuickAnswer && hasQuestionH2 && hasNamedSourceClaim && hasEnoughInternalLinks && passesClinicalSafety,
  };
}
