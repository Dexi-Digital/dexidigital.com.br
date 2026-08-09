const CONVERSIONS_API_URL = 'https://bzr.openai.com/v1/events';

interface OpenAIAdsConversionParams {
  eventId: string;
  sourceUrl: string;
}

/**
 * Envia conversão server-side para o OpenAI Ads Conversions API.
 * eventId deve ser o mesmo usado no pixel client-side (oaiq) para deduplicação.
 */
export async function sendOpenAIAdsConversion({
  eventId,
  sourceUrl,
}: OpenAIAdsConversionParams): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID;
  const apiKey = process.env.OPENAI_ADS_CONVERSION_API_KEY;

  if (!pixelId || !apiKey) return;

  try {
    const response = await fetch(`${CONVERSIONS_API_URL}?pid=${pixelId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        validate_only: false,
        events: [
          {
            id: eventId,
            type: 'lead_created',
            timestamp_ms: Date.now(),
            source_url: sourceUrl,
            action_source: 'web',
            data: {
              type: 'customer_action',
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('[OpenAI Ads] Conversion API error:', response.status, await response.text());
    }
  } catch (error) {
    console.error('[OpenAI Ads] Failed to send conversion:', error);
  }
}
