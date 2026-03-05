'use client';

import dynamic from 'next/dynamic';

const FingerprintTracker = dynamic(
    () => import('./FingerprintTracker'),
    { ssr: false }
);

export default function AnalyticsWrapper() {
    return <FingerprintTracker />;
}
