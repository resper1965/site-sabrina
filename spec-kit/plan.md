# Technical Plan: Sabrina Barros Blog

## Technology Stack

- **Framework**: Next.js 14+ (App Router).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS.
- **UI Components**: Shadcn UI (Radix UI based).
- **Icons**: Lucide React.
- **Content**: Contentlayer or direct MDX parsing for blog stability.
- **Deployment**: Vercel (recommended).

## Architecture

- `app/`: Routing and pages (home, blog, contact).
- `components/`: UI and business components.
  - `ui/`: Shadcn base components.
  - `blog/`: Post cards, lists, reading view.
  - `layout/`: Navbar, Footer, Container.
- `content/`: Markdown/MDX files for posts.
- `lib/`: Utilities (utils.ts, content-api.ts).
- `public/`: Images and assets.

## Visual Tokens

- **Font-Family**:
  - Display: 'Playfair Display' or 'Outfit' (Elegant serif/sans).
  - Body: 'Inter' or 'Plus Jakarta Sans'.
- **Colors**:
  - Primary: #0f172a (Deep Slate/Blue - Executive).
  - Secondary: #f8fafc (Light Gray/White - Medical/Clean).
  - Accent: Gold or Soft Blue.

## Navigation Structure

- Home (`/`)
- Blog (`/blog`)
- Category Filter (`/blog?category=...`)
- Post View (`/blog/[slug]`)
- About (`/about`)
