export interface IdentificationPayload {
    visitorId: string;
    url: string;
    userAgent: string;
    timestamp: string;
    email?: string; // From URL hack or form submission
}

export interface IdentificationResponse {
    success: boolean;
    action: 'created' | 'merged' | 'updated';
    enrichment?: {
        company?: string;
        domain?: string;
        score?: number;
    };
}

export const COOKIE_VISITOR_ID = 'dexi_visitor_id';
export const QUERY_PARAM_EMAIL = 'email';
