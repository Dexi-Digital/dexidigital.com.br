import { NextRequest, NextResponse } from 'next/server';
import { IdentificationPayload, IdentificationResponse } from '@/lib/analytics';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

// Input sanitization helper
function sanitizeString(input: unknown, maxLength: number = 500): string {
    if (typeof input !== 'string') return '';
    return input.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const clientIP = getClientIP(request);
        const rateLimitResult = checkRateLimit(clientIP, RATE_LIMITS.identify);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                { success: false, error: 'Rate limit exceeded' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Validate and sanitize payload
        const payload: IdentificationPayload = {
            visitorId: sanitizeString(body.visitorId, 100),
            url: sanitizeString(body.url, 2000),
            userAgent: sanitizeString(body.userAgent, 500),
            timestamp: sanitizeString(body.timestamp, 50),
            email: body.email ? sanitizeString(body.email, 254) : undefined,
        };

        // Validate required fields
        if (!payload.visitorId || !payload.url) {
            return NextResponse.json(
                { success: false, error: 'Invalid payload' },
                { status: 400 }
            );
        }

        // 1. IP Resolution (Extract IP)
        // In production, use X-Forwarded-For or similar headers from your hosting provider (Vercel, AWS, etc.)
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

        // Mock Enrichment Logic (Placeholder for Clearbit/Cortex)
        // In a real scenario, you would call an external API here using the IP
        const enrichmentData = {
            ip,
            company: ip === '127.0.0.1' ? 'Localhost Dev' : undefined,
            score: payload.email ? 100 : 10, // Higher score if we have an email
        };

        // 2. Orchestration (Webhook to n8n/Zapier)
        // This is where we would send the data to the CRM
        if (process.env.CRM_WEBHOOK_URL) {
            // Fire and forget (don't await to keep response fast)
            fetch(process.env.CRM_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...payload, ...enrichmentData }),
            }).catch(err => console.error('Webhook failed:', err));
        }

        // Log for demonstration
        console.log(`[API/Identify] Processed visitor: ${payload.visitorId} | IP: ${ip} | Email: ${payload.email || 'N/A'}`);

        const response: IdentificationResponse = {
            success: true,
            action: payload.email ? 'merged' : 'created',
            enrichment: {
                company: enrichmentData.company,
                score: enrichmentData.score,
            }
        };

        return NextResponse.json(response);

    } catch (error) {
        console.error('[API/Identify] Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
