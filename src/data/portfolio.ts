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
    'Computer Science undergraduate at Nanyang Technological University, focused on web applications, backend API design, database modelling, and production-ready engineering habits.',
};

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['FastAPI', 'Node.js', 'Express.js', 'ASP.NET MVC', 'GraphQL', 'REST APIs'],
  data: ['PostgreSQL', 'MySQL', 'Prisma', 'SQLAlchemy', 'Database modelling'],
  languages: ['JavaScript', 'Java', 'Python', 'C#', 'C', 'C++', 'Kotlin'],
  platforms: ['Git', 'Storyblok', 'Strapi', 'Kentico', 'Vercel'],
};

export const projects: Project[] = [
  {
    title: 'SignalCheck',
    eyebrow: 'Evidence-oriented analysis platform',
    description:
      'A full-stack scam, phishing-risk, and factual-claim analysis platform that returns evidence-linked indicators, limitations, and explicit insufficient-evidence outcomes.',
    impact:
      'Designed idempotent asynchronous jobs, PostgreSQL persistence, leased background workers with retries and crash recovery, and source-grounded verification.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'pytest'],
    links: [{ label: 'Repository', href: 'https://github.com/AlasamAkkit/AI-FactChecker' }],
    accent: '#14a06f',
  },
  {
    title: 'Ledger',
    eyebrow: 'Personal finance tracker',
    description:
      'An authenticated full-stack application for accounts, transactions, categories, and monthly budgets, with responsive dashboards for balances, cash flow, and budget progress.',
    impact:
      'Uses Clerk, Server Components and Actions, Prisma, Zod, and atomic database transactions to keep user-owned financial records consistent.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Tailwind CSS'],
    links: [
      { label: 'Live demo', href: 'https://financial-tracker-two-chi.vercel.app' },
      { label: 'Repository', href: 'https://github.com/AlasamAkkit/financial-tracker' },
    ],
    accent: '#f97316',
  },
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
    company: 'MSI Global Pte Ltd',
    role: 'Software Engineer Intern',
    period: 'Jun 2026 - Jul 2026',
    details:
      'Supported AFC application development in C++, Java, and Python; contributed to ticketing, fare-processing, and gate-management interfaces; investigated development and production defects; and collaborated with backend, DevOps, and QA teams on integration, stability, and documentation.',
  },
  {
    company: 'Amber Creative Singapore',
    role: 'Fullstack Web/Mobile App Developer Intern',
    period: 'Jul 2025 - Dec 2025',
    details:
      'Delivered production web features with Next.js, Storyblok, Kentico 13, ASP.NET MVC, and C#; resolved client-reported defects, built responsive CMS components, and supported Strapi v4-to-v5 migrations while preserving editor workflows and data integrity.',
  },
  {
    company: 'Accrets International Pte Ltd',
    role: 'Junior Programming Intern',
    period: 'Jan 2023 - May 2023',
    details:
      'Built reusable React components and improved layouts and user flows, working with designers and backend developers while using Git, debugging production code, and iterating through code-review feedback.',
  },
];

export const focusAreas = [
  'Cleaner full-stack project documentation',
  'Backend API design and database modelling',
  'Data structures and algorithms practice',
  'Production-ready software engineering practices',
];
