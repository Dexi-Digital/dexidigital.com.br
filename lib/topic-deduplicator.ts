function normalizeWords(title: string): Set<string> {
  return new Set(
    title
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3)
  );
}

export function isDuplicateTitle(candidate: string, existingTitles: string[]): boolean {
  const candidateWords = normalizeWords(candidate);
  if (candidateWords.size === 0) return false;

  return existingTitles.some((existing) => {
    const existingWords = normalizeWords(existing);
    if (existingWords.size === 0) return false;
    const intersection = [...candidateWords].filter((w) => existingWords.has(w));
    const overlap = intersection.length / Math.min(candidateWords.size, existingWords.size);
    return overlap > 0.6;
  });
}
