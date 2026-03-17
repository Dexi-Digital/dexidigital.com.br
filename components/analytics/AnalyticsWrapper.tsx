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

// Seções principais para tracking na home
const HOME_SECTIONS = [
    'hero',
    'resultados',
    'validacao-24h',
    'problemas',
    'riscos',
    'engenharia',
    'automotivo-cta',
    'faq',
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
