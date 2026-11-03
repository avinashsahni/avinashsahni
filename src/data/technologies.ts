export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tooling';
  description: string;
  badge: string;
}

export const technologies: Technology[] = [
  {
    name: 'React.js',
    category: 'frontend',
    description: 'Component architecture, state management, and modern interactive UI engineering.',
    badge: 'Frontend',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    description: 'Server-side rendering, static site generation, API routes, and App Router.',
    badge: 'Framework',
  },
  {
    name: 'Astro',
    category: 'frontend',
    description: 'Content-focused, zero-JS by default, ultra-fast static and dynamic web rendering.',
    badge: 'Framework',
  },
  {
    name: 'Node.js',
    category: 'backend',
    description: '6+ years experience building event-driven microservices, APIs, and scalable backends.',
    badge: 'Backend Core',
  },
  {
    name: 'TypeScript',
    category: 'tooling',
    description: 'Type-safe enterprise applications, robust refactoring, and clean developer contracts.',
    badge: 'Language',
  },
  {
    name: 'JavaScript',
    category: 'tooling',
    description: 'Modern ESNext, asynchronous programming, DOM APIs, and runtime optimization.',
    badge: 'Core',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    description: 'Relational data modeling, indexing strategies, complex queries, and ACID compliance.',
    badge: 'Database',
  },
  {
    name: 'MongoDB',
    category: 'database',
    description: 'Flexible document schemas, aggregation pipelines, and high-throughput data stores.',
    badge: 'Database',
  },
  {
    name: 'MySQL',
    category: 'database',
    description: 'Structured database schemas, transactional processing, and optimized relational stores.',
    badge: 'Database',
  },
  {
    name: 'Prisma',
    category: 'database',
    description: 'Type-safe ORM, declarative migrations, schema management, and query optimization.',
    badge: 'ORM',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first design systems, responsive layouts, and performant custom themes.',
    badge: 'Styling',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    description: 'Stateless endpoints, OpenAPI/Swagger specifications, robust authentication, and webhooks.',
    badge: 'Architecture',
  },
];

