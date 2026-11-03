export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Avinash Sahni',
  title: 'Independent Full-Stack Developer',
  tagline: 'I Build Digital Products That Help Businesses Grow.',
  description:
    'I help startups and businesses transform ideas into powerful digital experiences through modern web technologies, scalable architecture and thoughtful engineering.',
  url: 'https://avinashsahni.com',
  email: 'avinash@avinashsahni.com',
  location: 'Global / Remote',
  availability: 'Available for Freelance Projects',
  experienceYears: '6+ years',
  experienceHighlight: '6+ years of Node.js and full-stack development experience building scalable web applications and distributed backends.',

  nav: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],

  social: {
    github: 'https://github.com/avinashsahni',
    linkedin: 'https://linkedin.com/in/avinashsahni',
    twitter: 'https://twitter.com/avinashsahni',
  },

  specializations: [
    'SaaS Development',
    'Custom Web Applications',
    'Full-Stack Development',
    'Backend & API Development',
    'Business Dashboards',
    'Third-Party Integrations',
  ],

  seoKeywords: [
    'Avinash Sahni Full Stack Developer',
    'Freelance Full Stack Developer',
    'SaaS Development',
    'Custom Web Application Development',
    'React Developer',
    'Node.js Developer',
    'Web Development Services',
    'TypeScript Developer',
    'Independent Web Developer',
  ],
};
