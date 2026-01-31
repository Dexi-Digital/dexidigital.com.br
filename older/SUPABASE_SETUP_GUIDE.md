# Supabase Setup Guide for Dexi Digital

## Step-by-Step Instructions

### 1. Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign Up"
3. Sign up with GitHub (recommended) or email

### 2. Create a New Project

1. Once logged in, click "New Project"
2. Fill in the project details:
   - **Name**: `dexi-digital` (or any name you prefer)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to Brazil (e.g., `South America (São Paulo)` if available, or `US East`)
   - **Pricing Plan**: Free tier is fine for development
3. Click "Create new project"
4. Wait 2-3 minutes for the project to be provisioned

### 3. Get Your API Credentials

1. Once the project is ready, go to **Settings** (gear icon in sidebar)
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`
4. **Copy these values** - you'll need them for the `.env.local` file

### 4. Run the Database Schema

1. In your Supabase project, click on **SQL Editor** in the left sidebar
2. Click "New query" button
3. Open the file `nextjs-app/supabase-schema.sql` from this project
4. Copy the entire contents of that file
5. Paste it into the Supabase SQL Editor
6. Click "Run" (or press Cmd/Ctrl + Enter)
7. You should see a success message

### 5. Verify the Tables Were Created

1. Click on **Table Editor** in the left sidebar
2. You should see 4 tables:
   - `authors`
   - `posts`
   - `cases`
   - `leads`
3. Click on the `authors` table - you should see one row (Lorrayne Paraiso)

### 6. Configure Environment Variables

1. In your project, navigate to `nextjs-app/`
2. Copy `.env.example` to `.env.local`:
   ```bash
   cd nextjs-app
   cp .env.example .env.local
   ```
3. Edit `.env.local` and replace the placeholder values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

### 7. Test the Connection

1. Make sure your Next.js dev server is running:
   ```bash
   npm run dev
   ```
2. The app should now be able to connect to Supabase
3. You can verify by checking the browser console for any errors

## 🔒 Security Notes

### Row Level Security (RLS)

The schema includes Row Level Security policies:

- **Public access**: Anyone can read published posts and cases
- **Public insert**: Anyone can submit leads (contact form)
- **Admin access**: Only authenticated users can create/edit content

### Authentication (Optional for Now)

For the initial launch, you can manage content directly in Supabase:

1. Go to **Table Editor** in Supabase
2. Click on a table (e.g., `posts`)
3. Click "Insert row" to add content manually
4. Set `published = true` to make it visible on the website

Later, you can build an admin panel with authentication.

## 📊 Managing Content in Supabase

### Adding a Blog Post

1. Go to **Table Editor** → **posts**
2. Click "Insert row"
3. Fill in the fields:
   - `slug`: URL-friendly version (e.g., `guia-ia-qualidade-software`)
   - `title`: Post title
   - `excerpt`: Short description (155 chars for SEO)
   - `content`: Full post content (Markdown supported)
   - `author_id`: Select Lorrayne's ID from the dropdown
   - `category`: e.g., "IA Empresarial"
   - `tags`: Array like `["IA", "Qualidade", "Software"]`
   - `read_time_minutes`: Estimated reading time
   - `published`: `true` to make it live
   - `published_at`: Current timestamp
4. Click "Save"

### Adding a Case Study

1. Go to **Table Editor** → **cases**
2. Click "Insert row"
3. Fill in:
   - `slug`: URL-friendly (e.g., `grupo-automotivo-data-intelligence`)
   - `title`: Case study title
   - `client_name`: e.g., "Grupo Automotivo (NDA)"
   - `sector`: e.g., "Automotivo"
   - `problem`: Description of the problem
   - `solution`: How you solved it
   - `impact`: Measurable results
   - `technologies`: Array like `["Next.js", "Supabase", "Python"]`
   - `published`: `true`
   - `published_at`: Current timestamp
4. Click "Save"

## 🚀 Next Steps

1. ✅ Supabase project created
2. ✅ Database schema deployed
3. ✅ Environment variables configured
4. 🔲 Add sample blog posts
5. 🔲 Add sample case studies
6. 🔲 Build blog listing page
7. 🔲 Build case studies page

## 🆘 Troubleshooting

### "Failed to fetch" errors

- Check that your `.env.local` file has the correct Supabase URL and key
- Make sure the dev server was restarted after adding environment variables
- Verify the Supabase project is active (not paused)

### "Row Level Security" errors

- The RLS policies are configured to allow public read access to published content
- If you're getting permission errors, check the `published` field is set to `true`
- For admin operations, you'll need to set up authentication

### Tables not showing up

- Make sure you ran the entire `supabase-schema.sql` file
- Check the SQL Editor for any error messages
- Try running the schema again (it's safe - uses `IF NOT EXISTS`)

## 📞 Support

For Supabase-specific issues, check:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)

For project-specific questions, contact the Dexi Digital development team.

