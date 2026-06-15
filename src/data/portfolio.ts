export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
  accent: string;
};

export const profile = {
  name: 'Yu Siang Chong',
  handle: 'AlasamAkkit',
  location: 'Singapore',
  email: 'yusiangchong@outlook.com',
  phone: '+65 81820460',
  github: 'https://github.com/AlasamAkkit',
  linkedin: 'https://www.linkedin.com/in/chong-yu-siang-050247349/',
  avatar: 'https://github.com/AlasamAkkit.png',
  intro:
    'I build practical full-stack products with clean frontends, reliable APIs, and data models that are straightforward to maintain.',
  summary:
    'Year 3 Computer Science undergraduate at Nanyang Technological University, focused on web applications, backend API design, database modelling, and production-ready engineering habits.',
};

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express.js', 'ASP.NET MVC', 'GraphQL', 'REST APIs'],
  data: ['MySQL', 'PostgreSQL', 'Database modelling', 'TablePlus'],
  languages: ['JavaScript', 'Java', 'Python', 'C#', 'C', 'C++', 'Kotlin'],
  platforms: ['Git', 'Storyblok', 'Strapi', 'Kentico', 'Vercel'],
};

export const projects: Project[] = [
  {
    title: 'EduCareer',
    eyebrow: 'Full-stack learning platform',
    description:
      'A course management platform for learners, education providers, and administrators, covering enrollment, course operations, and admin oversight.',
    impact:
      'Shows end-to-end ownership across frontend, backend, and database layers for a realistic multi-role web product.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    links: [
      { label: 'Frontend', href: 'https://github.com/KCCHONG1997/ecom_frontend' },
      { label: 'Backend', href: 'https://github.com/KCCHONG1997/ecom_backend' },
      { label: 'Database', href: 'https://github.com/KCCHONG1997/ecom_db' },
    ],
    accent: '#2f80ed',
  },
  {
    title: 'AI Fact Checker',
    eyebrow: 'AI-assisted web app',
    description:
      'A claim-checking web application designed to evaluate user-submitted statements and present supporting evidence clearly.',
    impact:
      'Highlights product thinking around trustworthy AI output, evidence presentation, and user-facing interaction design.',
    tech: ['JavaScript', 'AI APIs', 'Web UI'],
    links: [{ label: 'Repository', href: 'https://github.com/AlasamAkkit/AI-FactChecker' }],
    accent: '#14a06f',
  },
  {
    title: 'Hospital Management System',
    eyebrow: 'OOP command-line system',
    description:
      'A Java CLI application that models hospital operations for roles such as administrators, doctors, and patients.',
    impact:
      'Demonstrates object-oriented design, SOLID principles, and workflow modelling in a constrained coursework system.',
    tech: ['Java', 'OOP', 'SOLID'],
    links: [{ label: 'Repository', href: 'https://github.com/AlasamAkkit/SC2002-project' }],
    accent: '#8b5cf6',
  },
  {
    title: 'MovieDB App',
    eyebrow: 'Android application',
    description:
      'A Kotlin-based movie database application that explores mobile UI patterns, data display, and Android project structure.',
    impact:
      'Extends the portfolio beyond web development and shows comfort with mobile application fundamentals.',
    tech: ['Kotlin', 'Android'],
    links: [{ label: 'Repository', href: 'https://github.com/AlasamAkkit/LTU-MovieDB' }],
    accent: '#f59e0b',
  },
  {
    title: 'Supermarket Delivery Game',
    eyebrow: 'Interactive Java system',
    description:
      'A virtual interactive system game where players deliver goods to target locations using an entity-component-system approach.',
    impact:
      'Shows simulation logic, Java architecture, and applied software design outside a conventional CRUD web app.',
    tech: ['Java', 'ECS', 'Game logic'],
    links: [{ label: 'Repository', href: 'https://github.com/AlasamAkkit/LTU-PasirRis-VIE' }],
    accent: '#ef4444',
  },
];

export const experience = [
  {
    company: 'Amber Creative Pte Ltd',
    role: 'Full-stack Web Developer Intern',
    period: 'Jul 2025 - Dec 2025',
    details:
      'Worked across CMS-driven websites, frontend implementation, backend integration, and production web delivery.',
  },
  {
    company: 'Accrets International Pte Ltd',
    role: 'Software Developer Intern',
    period: 'Jan 2023 - May 2023',
    details:
      'Supported software development work while building practical experience with application logic and maintainable code.',
  },
];

export const focusAreas = [
  'Cleaner full-stack project documentation',
  'Backend API design and database modelling',
  'Data structures and algorithms practice',
  'Production-ready software engineering practices',
];
