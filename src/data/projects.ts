export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  technologies: string[];
  keyFunctionality: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureNotes: string;
  role: string;
  status: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'convertcase-in',
    slug: 'convertcase-in',
    title: 'ConvertCase.in',
    category: 'Web Tool & Text Processing',
    shortDescription:
      'High-performance text transformation and formatting utility designed for developers, writers, and digital professionals.',
    fullDescription:
      'ConvertCase.in is a focused text utility platform engineered for high client-side efficiency, instant string manipulation, and zero latency. Built with modern web standards, it handles case transformations, regex cleaning, slugification, and encoding without sending sensitive text data across unnecessary networks.',
    featured: true,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    keyFunctionality: [
      'Instant client-side text case transformation (UPPER, lower, Title, Camel, Kebab, Snake)',
      'Zero-latency processing keeping user data local in the browser',
      'Regex-powered white-space cleanup and character replacement algorithms',
      'Export and copy-to-clipboard workflows with toast feedback',
      'Fully responsive, accessibility-tested keyboard navigation interface',
    ],
    liveUrl: 'https://convertcase.in',
    architectureNotes:
      'Engineered with a lightweight client-side state machine ensuring millisecond response times regardless of text payload size. Core logic runs in the browser thread with zero server roundtrips.',
    role: 'Lead Full-Stack Developer & Architect',
    status: 'Live & Maintained',
  },
  {
    id: 'forgecodehub',
    slug: 'forgecodehub',
    title: 'ForgeCodeHub',
    category: 'Developer Platform & Tools',
    shortDescription:
      'Centralized code snippet repository, developer workflow tooling, and knowledge management application.',
    fullDescription:
      'ForgeCodeHub is a comprehensive developer platform designed to organize, search, and share reusable code snippets, system configuration templates, and architectural patterns. Engineered with a scalable relational database and rich text syntax rendering.',
    featured: true,
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React.js', 'Tailwind CSS', 'REST APIs'],
    keyFunctionality: [
      'Multi-language code snippet management with syntax highlighting',
      'Tag-based taxonomy and full-text search indexing',
      'REST API backend with secure bearer token authorization',
      'Prisma ORM schema migrations for structured relational data',
      'Quick copy, fork, and markdown documentation generation',
    ],
    liveUrl: 'https://forgecodehub.com',
    githubUrl: 'https://github.com/avinashsahni/forgecodehub',
    architectureNotes:
      'Decoupled architecture featuring a Node.js REST API layer backed by PostgreSQL and Prisma, paired with an optimized React frontend utilizing client caching for snappy navigation.',
    role: 'Full-Stack Developer & Database Designer',
    status: 'Active Project',
  },
  {
    id: 'custom-saas-web-application',
    slug: 'custom-saas-web-application',
    title: 'Modern SaaS Application Architecture',
    category: 'SaaS Platform & Multi-Tenant Web App',
    shortDescription:
      'Production-grade multi-tenant web application featuring subscription billing, role-based access control, and team management.',
    fullDescription:
      'A scalable SaaS architecture demonstration and foundation built to solve common enterprise SaaS hurdles: tenant isolation, Stripe webhook event idempotency, role-based team invitations, and audit trail logging.',
    featured: true,
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React.js', 'Tailwind CSS', 'Stripe API'],
    keyFunctionality: [
      'Multi-tenant workspace isolation with role-based access (Owner, Admin, Member)',
      'Stripe subscription checkout with automated webhook event synchronization',
      'Secure passwordless authentication and session management',
      'Interactive metrics dashboard and workspace member invite workflows',
      'Comprehensive RESTful API with automated request validation',
    ],
    liveUrl: 'https://demo-saas.avinashsahni.com',
    githubUrl: 'https://github.com/avinashsahni/modern-saas-architecture',
    architectureNotes:
      'Employs PostgreSQL row-level security concepts and Prisma middleware to enforce strict tenant boundaries. Background workers handle asynchronous webhook dispatching.',
    role: 'Full-Stack Architect & Backend Engineer',
    status: 'Architecture Reference',
  },
];

