import { siteConfig } from '../data/siteConfig';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    knowsAbout: [
      'Full-Stack Development',
      'Node.js',
      'React.js',
      'Next.js',
      'Astro',
      'TypeScript',
      'PostgreSQL',
      'REST APIs',
      'SaaS Development',
      'Database Architecture',
    ],
  };
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: `${siteConfig.name} – Web Development Services`,
    image: `${siteConfig.url}/og-image.svg`,
    url: siteConfig.url,
    telephone: '',
    priceRange: 'N/A', // As requested, no pricing ranges published
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global Remote',
    },
    founder: {
      '@id': `${siteConfig.url}/#person`,
    },
    description: siteConfig.description,
    serviceType: siteConfig.specializations,
  };
}

export function generateArticleSchema({
  title,
  description,
  pubDate,
  updatedDate,
  url,
  author = siteConfig.name,
}: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  url: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate || pubDate).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
