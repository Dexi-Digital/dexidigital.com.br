# Dexi Digital - Next.js Rebuild: Sitemap & Technical Architecture

## Complete Sitemap

### Primary Pages (Priority: 1.0)
- `/` - Homepage
- `/contato` - Contact & Free Diagnostic Form

### Service Pages (Priority: 0.9)
- `/servicos` - Services Overview
- `/servicos/inteligencia-de-dados` - Data Intelligence & Analytics
- `/servicos/software-sob-medida` - Custom Software Development
- `/servicos/ia-para-empresas` - AI for Enterprises (Governed AI)

### Authority & Social Proof (Priority: 0.8)
- `/cases` - Case Studies Listing
- `/cases/[slug]` - Individual Case Study (dynamic)
- `/sobre` - About Dexi, Lorrayne's Bio, Philosophy

### Content Marketing (Priority: 0.7)
- `/blog` - Blog Listing (paginated)
- `/blog/[slug]` - Individual Blog Post (dynamic)
- `/blog/categoria/[category]` - Category Archive (optional)

### Utility Pages (Priority: 0.5)
- `/politica-privacidade` - Privacy Policy (LGPD compliance)
- `/termos-uso` - Terms of Use
- `/obrigado` - Thank You page (post-form submission)

---

## URL Structure & SEO Strategy

### URL Patterns
- **Short, descriptive slugs**: `/ia-para-empresas`, `/inteligencia-de-dados`
- **Portuguese-first**: Primary market is Brazil
- **No dates in URLs**: Evergreen content strategy
- **Hyphens for readability**: `/software-sob-medida` not `/software_sob_medida`

### Canonical URLs
- All pages have self-referencing canonical tags
- Blog posts: `https://dexidigital.com.br/blog/[slug]`
- Case studies: `https://dexidigital.com.br/cases/[slug]`

### Metadata Strategy (per page type)
**Homepage**:
- Title: "Dexi Digital - Inteligência de Dados e Software com IA Acelerada | Soluções Empresariais"
- Description: "Desenvolvimento de software sob medida e inteligência de dados com IA acelerada e supervisão técnica humana. 10+ anos de experiência com grupos automotivos e grandes corporações."

**Service Pages**:
- Title Pattern: "[Service Name] | Dexi Digital - IA Acelerada + Expertise Humana"
- Description: Focus on benefits, target audience, and differentiators

**Blog Posts**:
- Title: "[Post Title] | Blog Dexi Digital"
- Description: First 155 characters of excerpt or custom meta description
- Article schema with author, publish date, modified date

**Case Studies**:
- Title: "[Case Title] | Cases Dexi Digital"
- Description: Problem + Solution + Impact in 155 chars

---

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 14.2+ (App Router, React Server Components)
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS 3.4+ (utility-first, responsive design)
- **Database**: Supabase (PostgreSQL)
  - Auth: Supabase Auth (for admin/blog management)
  - Storage: Supabase Storage (images, assets)
  - Real-time: Optional for admin dashboard
- **Deployment**: Vercel (Edge Functions, ISR, Image Optimization)
- **Analytics**: Vercel Analytics + Google Analytics 4
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend or SendGrid (contact form notifications)

### Project Structure
```
/app
  /(marketing)
    /page.tsx                          # Homepage
    /sobre/page.tsx                    # About
    /contato/page.tsx                  # Contact
    /servicos
      /page.tsx                        # Services overview
      /inteligencia-de-dados/page.tsx
      /software-sob-medida/page.tsx
      /ia-para-empresas/page.tsx
    /cases
      /page.tsx                        # Case studies listing
      /[slug]/page.tsx                 # Individual case study
    /blog
      /page.tsx                        # Blog listing
      /[slug]/page.tsx                 # Individual post
  /api
    /contact/route.ts                  # Contact form handler
    /newsletter/route.ts               # Newsletter signup (optional)
  /sitemap.ts                          # Dynamic sitemap
  /robots.ts                           # Robots.txt
  /layout.tsx                          # Root layout
  /not-found.tsx                       # 404 page
/components
  /ui                                  # Reusable UI components
  /sections                            # Homepage sections (Hero, Services, etc.)
  /layout                              # Header, Footer, Navigation
/lib
  /supabase                            # Supabase client & helpers
  /utils                               # Utility functions
  /validations                         # Zod schemas
/types
  /database.types.ts                   # Supabase generated types
  /index.ts                            # Custom types
/public
  /images
  /icons
```

---

## Supabase Database Schema

### Tables

#### `authors`
```sql
CREATE TABLE authors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  role TEXT, -- e.g., "CTO & Founder"
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `posts`
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL, -- Markdown or rich text
  cover_image_url TEXT,
  author_id UUID REFERENCES authors(id),
  category TEXT, -- e.g., "IA Empresarial", "Data Intelligence"
  tags TEXT[], -- Array of tags
  read_time_minutes INTEGER,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(published, published_at DESC);
```

#### `cases`
```sql
CREATE TABLE cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client_name TEXT, -- "Grupo Automotivo (NDA)" or anonymized
  sector TEXT NOT NULL, -- "Automotivo", "Varejo", etc.
  problem TEXT NOT NULL, -- Problem statement
  solution TEXT NOT NULL, -- Solution description
  impact TEXT NOT NULL, -- Measurable results
  technologies TEXT[], -- ["Next.js", "Supabase", "Python"]
  cover_image_url TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_cases_slug ON cases(slug);
CREATE INDEX idx_cases_published ON cases(published, published_at DESC);
```

#### `leads`
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  source TEXT, -- "contact_form", "diagnostic_form", "newsletter"
  metadata JSONB, -- Additional form fields
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
```

---

## SEO Technical Implementation

### Next.js Metadata API (App Router)
Each page exports metadata object:

```typescript
// app/(marketing)/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital - Inteligência de Dados e Software com IA Acelerada',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image-home.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/og-image-home.jpg'],
  },
};
```

### Dynamic Sitemap (`app/sitemap.ts`)
```typescript
import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();
  
  // Fetch published posts and cases
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, updated_at')
    .eq('published', true);
  
  const { data: cases } = await supabase
    .from('cases')
    .select('slug, updated_at')
    .eq('published', true);
  
  return [
    { url: 'https://dexidigital.com.br', priority: 1.0 },
    { url: 'https://dexidigital.com.br/servicos', priority: 0.9 },
    // ... static pages
    ...posts.map(post => ({
      url: `https://dexidigital.com.br/blog/${post.slug}`,
      lastModified: post.updated_at,
      priority: 0.7,
    })),
    ...cases.map(c => ({
      url: `https://dexidigital.com.br/cases/${c.slug}`,
      lastModified: c.updated_at,
      priority: 0.8,
    })),
  ];
}
```

### Structured Data (JSON-LD)
- **Organization schema** on homepage
- **LocalBusiness schema** with Brazil location
- **Article schema** on blog posts
- **FAQPage schema** on homepage FAQ section

---

## Performance Optimization

### Image Strategy
- Next.js `<Image>` component for all images
- WebP/AVIF formats with fallbacks
- Responsive sizes: `sizes="(max-width: 768px) 100vw, 50vw"`
- Lazy loading by default
- Priority loading for hero images

### Caching Strategy
- **Static pages**: Generated at build time (ISR)
- **Blog posts**: ISR with 60s revalidation
- **Case studies**: ISR with 60s revalidation
- **API routes**: Edge Functions for contact form

### Core Web Vitals Targets
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

---

## LLMO (Large Language Model Optimization)

### Content Principles
1. **Clear context in every paragraph**: Who, what, for whom, results
2. **Short paragraphs**: 2-3 sentences max
3. **Consistent messaging**: Reinforce "AI + human", "data foundation", "business focus"
4. **Structured headings**: H1 → H2 → H3 hierarchy for LLM parsing
5. **FAQ sections**: Address common questions directly

### Key Phrases to Reinforce
- "IA acelerada com supervisão técnica humana"
- "Para empresas que não podem falhar"
- "Tecnologia é o meio, não o fim"
- "Construído para durar além dos ciclos de hype"
- "Governança, explicabilidade e controle total"

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Initialize Next.js project with TypeScript
- [ ] Set up Supabase project and database schema
- [ ] Configure Tailwind CSS and design system
- [ ] Implement base layout (Header, Footer, Navigation)

### Phase 2: Core Pages (Week 2)
- [ ] Homepage with all sections
- [ ] Services pages (3 pages)
- [ ] About page
- [ ] Contact page with form

### Phase 3: Dynamic Content (Week 3)
- [ ] Blog system (listing + individual posts)
- [ ] Case studies (listing + individual cases)
- [ ] Admin interface for content management (optional)

### Phase 4: SEO & Polish (Week 4)
- [ ] Implement all metadata
- [ ] Dynamic sitemap and robots.txt
- [ ] Structured data (JSON-LD)
- [ ] Performance optimization
- [ ] Analytics integration

### Phase 5: Content Creation (Ongoing)
- [ ] Write 3-5 authority blog posts
- [ ] Create 2-3 case studies
- [ ] Populate all service pages with detailed content

---

## Next Steps

1. **Review and approve** this sitemap and architecture
2. **Initialize Next.js + Supabase project**
3. **Design system**: Define colors, typography, components
4. **Start with homepage implementation**

