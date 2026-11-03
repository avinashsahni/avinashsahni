export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Development',
    shortDescription: 'Build scalable SaaS platforms, MVPs and subscription-based applications.',
    fullDescription:
      'Transform software concepts into reliable, production-ready SaaS products. From multi-tenant data architecture and subscription billing workflows to intuitive user dashboards, I engineer full-lifecycle SaaS platforms designed to scale as your user base grows.',
    iconName: 'Layers',
    benefits: [
      'Rapid MVP release without sacrificing architectural integrity',
      'Secure multi-tenant data isolation and role-based access',
      'Seamless recurring billing with automated webhooks and invoicing',
      'Clean modular codebase built for continuous feature expansion',
    ],
    deliverables: [
      'Complete full-stack SaaS platform',
      'User authentication & RBAC system',
      'Stripe / LemonSqueezy subscription integration',
      'User settings, profile & team management',
      'Automated transactional emails and onboarding flows',
      'Deployment pipeline and production monitoring setup',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    idealFor: 'Founders, early-stage startups, and venture studios building new digital products.',
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Develop responsive, fast and SEO-friendly business websites.',
    fullDescription:
      'Engineered for speed, conversion, and discoverability. I craft modern corporate and marketing websites using static and hybrid architectures like Astro and Next.js, guaranteeing sub-second load times and industry-leading Core Web Vitals.',
    iconName: 'Globe',
    benefits: [
      'Near-perfect 95+ Google Lighthouse scores across all metrics',
      'Deep SEO optimization with semantic HTML and JSON-LD schema',
      'Fully responsive UX optimized for mobile, tablet, and desktop',
      'Zero unnecessary client-side JavaScript overhead',
    ],
    deliverables: [
      'Custom bespoke website design implementation',
      'Content management (MDX or headless CMS integration)',
      'Contact forms with validation & spam protection',
      'Open Graph & social sharing card generation',
      'XML sitemap, robots.txt, and canonical URL structure',
      'Cloudflare Pages / Vercel high-performance deployment',
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'React.js', 'MDX'],
    idealFor: 'Modern businesses, agencies, and consultancies wanting an authoritative web presence.',
  },
  {
    id: 'custom-web-applications',
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    shortDescription: 'Create tailored web applications for specific business workflows.',
    fullDescription:
      'Off-the-shelf software often forces businesses into rigid constraints. I develop bespoke web applications tailored to your specific operational workflows, internal bottlenecks, and proprietary logic to streamline daily productivity.',
    iconName: 'Cpu',
    benefits: [
      'Eliminate repetitive manual tasks through tailored digital workflows',
      'Centralized real-time business data with strict security compliance',
      'Frictionless user experience designed around actual staff behavior',
      'Full source code ownership with zero restrictive licensing fees',
    ],
    deliverables: [
      'Workflow mapping and technical specification',
      'Bespoke frontend interface and business logic',
      'High-performance backend API with relational data integrity',
      'Audit logging and user activity tracking',
      'Automated data validation and export capabilities',
      'End-to-end integration testing and user documentation',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    idealFor: 'Growing enterprises and companies requiring custom operational software.',
  },
  {
    id: 'backend-and-api-development',
    slug: 'backend-and-api-development',
    title: 'Backend & API Development',
    shortDescription: 'Build secure REST APIs, backend services and database architecture.',
    fullDescription:
      'A resilient frontend is only as dependable as the backend powering it. Drawing on 6+ years of Node.js engineering, I design and implement secure RESTful APIs, high-throughput microservices, and optimized database architectures.',
    iconName: 'Server',
    benefits: [
      'High-performance query execution and strategic indexing',
      'Rigorous security standards: rate limiting, JWT/OAuth2, input sanitization',
      'Clear, predictable REST contracts with automated documentation',
      'Horizontal scalability and stateless service architecture',
    ],
    deliverables: [
      'Complete REST API implementation with Node.js & TypeScript',
      'Database schema design, normalization & migrations',
      'Authentication, session management, and authorization middleware',
      'Structured error handling, request logging, and observability',
      'Comprehensive OpenAPI / Swagger specification documentation',
      'Automated test suites for critical endpoint logic',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'REST APIs'],
    idealFor: 'Teams needing robust server infrastructure or modernizing legacy APIs.',
  },
  {
    id: 'admin-panels-and-dashboards',
    slug: 'admin-panels-and-dashboards',
    title: 'Admin Panels & Dashboards',
    shortDescription: 'Develop analytics dashboards, admin panels and business management systems.',
    fullDescription:
      'Empower your team with intuitive dashboards that turn complex datasets into clear, actionable business insights. I build responsive admin consoles with data visualization, granular permission hierarchies, and seamless bulk management tools.',
    iconName: 'LayoutDashboard',
    benefits: [
      'Real-time visualization of KPIs and business metrics',
      'Fine-grained role permissions for team members and auditors',
      'Fast filtering, sorting, pagination, and multi-format exports',
      'Clean, dark-mode friendly UI engineered for high-density information',
    ],
    deliverables: [
      'Responsive administrative portal and dashboard layout',
      'Interactive metrics charts and visual trend summaries',
      'CRUD interfaces for customer, order, and content management',
      'Secure impersonation and granular role-based permissions',
      'Audit log inspection and system health monitoring',
      'CSV / PDF export tools and automated reporting triggers',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    idealFor: 'Operations leads, product managers, and SaaS teams managing complex platforms.',
  },
  {
    id: 'third-party-integrations',
    slug: 'third-party-integrations',
    title: 'Third-Party Integrations',
    shortDescription: 'Integrate payment gateways, CRM platforms, authentication and external APIs.',
    fullDescription:
      'Connect your application seamlessly to the external services your business depends on. I handle complex authentication protocols, webhook ingestion, rate-limit resilient queues, and bi-directional synchronizations with third-party ecosystems.',
    iconName: 'Share2',
    benefits: [
      'Fault-tolerant webhook processing with idempotent event handlers',
      'Automated background synchronization between disparate systems',
      'Secure handling of sensitive client tokens and webhook secrets',
      'Graceful degradation and retry mechanisms on upstream failures',
    ],
    deliverables: [
      'Payment gateway integrations (Stripe, PayPal, LemonSqueezy)',
      'Authentication providers (OAuth2, Google, GitHub, Magic Links)',
      'CRM & marketing automation sync (HubSpot, Mailchimp, Resend)',
      'Cloud storage & media processing (AWS S3, Cloudflare R2)',
      'Webhook listener infrastructure with replay capability',
      'Integration health logging and error alert dispatching',
    ],
    technologies: ['Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Prisma'],
    idealFor: 'Businesses looking to connect disparate tools into an integrated software pipeline.',
  },
];

