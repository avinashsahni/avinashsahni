# Avinash Sahni – Full-Stack Developer Portfolio

A production-ready personal portfolio website for **Avinash Sahni**, Independent Full-Stack Developer specializing in SaaS platforms, high-throughput Node.js APIs, and modern web applications.

Engineered with Astro, TypeScript, Tailwind CSS, React islands, and Cloudflare Pages deployment.

---

## 🚀 Live Demo & Brand Overview

- **Name:** Avinash Sahni
- **Title:** Independent Full-Stack Developer
- **Headline:** *"I Build Digital Products That Help Businesses Grow."*
- **Primary CTA:** Let's Discuss Your Project
- **Availability:** Available for Freelance Projects

---

## 🛠️ Technology Stack

- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation with Island Architecture)
- **Language:** TypeScript (Strict Type Checking)
- **Styling:** Tailwind CSS (Custom Dark Theme `#0A0A0A` with `#FF6B35` Orange Accent)
- **Interactive Islands:** React 19 (Used strictly where client interactivity is required: Mobile Menu, Interactive Contact Form)
- **Icons:** SVG & Lucide Icons
- **Content:** Markdown & MDX Content Collections for Blog and Case Studies
- **Email Service:** [Resend](https://resend.com/) for contact inquiries
- **Hosting / Edge Platform:** Cloudflare Pages (Static assets + Pages Functions for `/api/contact`)

---

## 📁 Project Architecture

```
avinashsahni/
├── functions/
│   └── api/
│       └── contact.ts            # Cloudflare Pages Serverless Function for Resend emails
├── public/
│   ├── favicon.svg               # SVG Brand Monogram
│   ├── og-image.svg              # Open Graph Social Sharing Card
│   └── robots.txt                # Search engine crawler directives
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro      # Desktop & responsive top navigation
│   │   │   ├── Footer.astro      # Global site footer & legal links
│   │   │   └── MobileMenu.tsx    # React island for mobile drawer navigation
│   │   ├── sections/
│   │   │   ├── Hero.astro        # Headline, CTA, availability, interactive terminal visual
│   │   │   ├── TechBadges.astro  # 12 Core technology badges
│   │   │   ├── AboutPreview.astro# Engineering philosophy & overview
│   │   │   ├── ServicesGrid.astro# 6 Professional service cards (Zero pricing)
│   │   │   ├── FeaturedProjects.astro # Verified project showcase
│   │   │   ├── ProcessSection.astro   # 4-stage development process
│   │   │   ├── WhyWorkWithMe.astro    # 6 Key client advantages
│   │   │   └── ContactCTA.astro       # High-conversion closing banner
│   │   └── ui/
│   │       ├── Button.astro      # Polymorphic button (primary, secondary, outline, ghost)
│   │       ├── Badge.astro       # Monospace status badges
│   │       ├── Card.astro        # Surface container with subtle hover glow
│   │       ├── SectionHeading.astro
│   │       ├── ServiceCard.astro # Service card with deliverables preview
│   │       ├── ProjectCard.astro # Project card with browser window mockup
│   │       └── ContactForm.tsx   # React contact form with validation & honeypot spam protection
│   ├── content/
│   │   ├── config.ts             # Content Collections schema (Zod validation)
│   │   └── blog/                 # MDX Technical essays & architecture guides
│   │       ├── how-to-build-a-scalable-saas-application.mdx
│   │       ├── choosing-between-react-nextjs-and-astro.mdx
│   │       └── building-secure-rest-apis-with-nodejs.mdx
│   ├── data/
│   │   ├── siteConfig.ts         # Personal branding, navigation, SEO metadata
│   │   ├── services.ts           # 6 Detailed service offerings & deliverables
│   │   ├── projects.ts           # Verified project case study data
│   │   └── technologies.ts       # Categorized technology stack
│   ├── layouts/
│   │   └── BaseLayout.astro      # Semantic HTML5, JSON-LD Schema, Open Graph
│   ├── lib/
│   │   ├── seo.ts                # Person, ProfessionalService, Article & Breadcrumb schema
│   │   └── utils.ts              # Class merging & date formatting helpers
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # Full developer story & engineering philosophy
│   │   ├── services/
│   │   │   ├── index.astro       # Services directory
│   │   │   └── [slug].astro      # Individual service detail pages
│   │   ├── projects/
│   │   │   ├── index.astro       # Portfolio showcase
│   │   │   └── [slug].astro      # In-depth architectural case studies
│   │   ├── blog/
│   │   │   ├── index.astro       # Engineering writing directory
│   │   │   └── [slug].astro      # Individual MDX article layout
│   │   ├── contact.astro         # Inquiries page with ContactForm island
│   │   ├── privacy.astro         # Privacy policy
│   │   └── 404.astro             # Custom 404 page
│   └── styles/
│       └── global.css            # Custom CSS, dark theme variables, focus indicators
├── astro.config.mjs              # Astro configuration with Tailwind, React, Sitemap & MDX
├── tailwind.config.mjs           # Dark palette, custom fonts, glow shadows
├── tsconfig.json                 # Strict TypeScript configuration
└── package.json
```

---

## 🔒 Strict Business Rules Enforced

1. **Zero Pricing Policy:** No pricing tables, hourly rates, packages, or budget dropdowns appear anywhere on the website.
2. **Factual Integrity:** Every project (ConvertCase.in, ForgeCodeHub, Custom SaaS Platform) details real architectural challenges and solutions without fabricated client names or exaggerated revenue statistics.
3. **SEO & Structured Data:** Semantic HTML5, canonical URLs, XML sitemap (`/sitemap-index.xml`), `robots.txt`, Open Graph images, Twitter cards, and complete JSON-LD schemas:
   - `Person` schema for Avinash Sahni
   - `ProfessionalService` schema
   - `BlogPosting` / `Article` schema for technical essays
   - `BreadcrumbList` schema on all secondary pages

---

## ⚙️ Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```bash
# Resend API Key for dispatching inquiry emails
# Obtain from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Recipient email address where client inquiries should arrive
CONTACT_NOTIFICATION_EMAIL=avinash@avinashsahni.com

# Verified sender email address configured in Resend
CONTACT_FROM_EMAIL=Avinash Sahni <onboarding@resend.dev>

# Production canonical domain
PUBLIC_SITE_URL=https://avinashsahni.com
```

*Note: In local development, if `RESEND_API_KEY` is omitted, the contact form simulates successful delivery and logs submission details to the server console.*

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Run TypeScript type checks
npm run typecheck

# 4. Build for production
npm run build

# 5. Preview production output
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment Instructions

### Method A: Git-Based Automated Deployment (Recommended)

1. Push your repository to **GitHub** or **GitLab**.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository (`avinashsahni`).
4. Configure the build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version (Environment Variable):** Set `NODE_VERSION` to `22` (or >= 20.0.0).
5. Add the Environment Variables in Cloudflare Pages Settings:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_NOTIFICATION_EMAIL` = `avinash@avinashsahni.com`
   - `CONTACT_FROM_EMAIL` = `Avinash Sahni <notifications@yourverifieddomain.com>`
6. Click **Save and Deploy**. Cloudflare Pages will automatically:
   - Build your 20 static pages into high-speed Edge CDN cache.
   - Detect `functions/api/contact.ts` and deploy it as a Cloudflare Worker for `/api/contact`.

### Method B: Direct CLI Deployment via Wrangler

```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Login to your Cloudflare account
wrangler login

# Build static output
npm run build

# Deploy dist folder and functions
wrangler pages deploy dist --project-name avinashsahni
```

---

## 📄 License

Proprietary portfolio and brand assets belonging to **Avinash Sahni**. All rights reserved.

#   a v i n a s h s a h n i  
 