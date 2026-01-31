export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: string;
          name: string;
          bio: string | null;
          avatar_url: string | null;
          role: string | null;
          linkedin_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          bio?: string | null;
          avatar_url?: string | null;
          role?: string | null;
          linkedin_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          bio?: string | null;
          avatar_url?: string | null;
          role?: string | null;
          linkedin_url?: string | null;
          created_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content: string;
          cover_image_url: string | null;
          author_id: string | null;
          category: string | null;
          tags: string[] | null;
          read_time_minutes: number | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt?: string | null;
          content: string;
          cover_image_url?: string | null;
          author_id?: string | null;
          category?: string | null;
          tags?: string[] | null;
          read_time_minutes?: number | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string | null;
          content?: string;
          cover_image_url?: string | null;
          author_id?: string | null;
          category?: string | null;
          tags?: string[] | null;
          read_time_minutes?: number | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      cases: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client_name: string | null;
          sector: string;
          problem: string;
          solution: string;
          impact: string;
          technologies: string[] | null;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client_name?: string | null;
          sector: string;
          problem: string;
          solution: string;
          impact: string;
          technologies?: string[] | null;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          client_name?: string | null;
          sector?: string;
          problem?: string;
          solution?: string;
          impact?: string;
          technologies?: string[] | null;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          message: string | null;
          source: string | null;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          phone?: string | null;
          message?: string | null;
          source?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          phone?: string | null;
          message?: string | null;
          source?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
      };
    };
  };
}

