'use client';

import dynamic from 'next/dynamic';

const FingerprintTracker = dynamic(
    () => import('./FingerprintTracker'),
    { ssr: false }
);

const ScrollTracker = dynamic(
    () => import('./ScrollTracker'),
    { ssr: false }
);

// Seções principais para tracking na home (ids de app/page.tsx)
const HOME_SECTIONS = [
    'hero',
    'a-dor',
    'o-que-fazemos',
    'para-quem',
    'fykos',
    'provas',
    'faq',
    'cta',
];

export default function AnalyticsWrapper() {
    return (
        <>
            <FingerprintTracker />
            <ScrollTracker
                sectionIds={HOME_SECTIONS}
                scrollDepths={[25, 50, 75, 90, 100]}
            />
        </>
    );
}
