# Dexi Digital - Next.js Website

Modern, AI-accelerated website for Dexi Digital built with Next.js 14+, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, React Server Components)
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS 4+
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier is fine)
- Git

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Once your project is ready, go to **Settings** → **API**
3. Copy your **Project URL** and **anon/public key**
4. Go to the **SQL Editor** in Supabase
5. Copy the contents of `supabase-schema.sql` and run it in the SQL Editor
6. This will create all necessary tables (authors, posts, cases, leads)

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## 📁 Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components (to be created)
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client utilities
├── types/                 # TypeScript type definitions
│   └── database.types.ts # Supabase database types
├── public/               # Static assets
├── supabase-schema.sql   # Database schema
└── README.md             # This file
```

## 🗄️ Database Schema

The database includes 4 main tables:

- **authors**: Blog post authors (Lorrayne, team members)
- **posts**: Blog articles with categories, tags, and publish status
- **cases**: Case studies with problem-solution-impact structure
- **leads**: Contact form submissions and lead capture

See `supabase-schema.sql` for the complete schema.

## 🎨 Design System

### Colors

- **Primary**: Indigo/Purple (`#6366f1`) - Main brand color
- **Secondary**: Green (`#22c55e`) - Accent color
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

## 📝 Next Steps

1. ✅ Next.js project initialized
2. ✅ Supabase integration configured
3. ✅ Database schema created
4. 🔲 Create layout components (Header, Footer, Navigation)
5. 🔲 Build homepage sections
6. 🔲 Create service pages
7. 🔲 Build blog system
8. 🔲 Create case studies pages
9. 🔲 Implement contact form
10. 🔲 Add SEO (sitemap, robots.txt, structured data)

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables (Supabase URL and keys)
5. Deploy!

Vercel will automatically detect Next.js and configure everything.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

This is a private project for Dexi Digital. For questions or issues, contact the development team.

## 📄 License

Proprietary - © 2026 Dexi Digital. All rights reserved.

