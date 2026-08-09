/**
 * All page copy lives here so the components stay pure layout.
 * Everything below is placeholder — swap in the real details.
 */

export const profile = {
  name: 'Amirreza Sokhankhosh',
  role: 'Software Engineer',
  location: 'Winnipeg, Canada',
  photo: '/me.JPEG',
  email: 'amirreza.sokhankhosh@gmail.com',
  resumeUrl: '#',
  intro:
    'One or two sentences on what I build and what I care about. Keep it short — this is the first thing anyone reads.',
  about: [
    'A paragraph with more room. What I work on day to day, the kinds of problems I like, and the tools I reach for first.',
    'A second paragraph for background — where I studied, what I did before, and anything that explains how I got here.',
  ],
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/' },
]

export type Experience = {
  role: string
  company: string
  href?: string
  period: string
  summary: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Company Name',
    href: '#',
    period: '2024 — Present',
    summary:
      'One line on the scope of the work and the thing you are most proud of shipping.',
    tags: ['TypeScript', 'React', 'Postgres'],
  },
  {
    role: 'Research Assistant',
    company: 'University Lab',
    href: '#',
    period: '2022 — 2024',
    summary:
      'What the research was about and what came out of it — a paper, a system, a result.',
    tags: ['Python', 'Distributed Systems'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Earlier Company',
    period: 'Summer 2021',
    summary: 'A short line about what you owned during the internship.',
    tags: ['Go', 'Docker'],
  },
]

export type Project = {
  name: string
  description: string
  year: string
  tags: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: 'Project One',
    description:
      'What it does in a sentence, and why it was interesting to build.',
    year: '2025',
    tags: ['React', 'Vite'],
    href: '#',
  },
  {
    name: 'Project Two',
    description: 'A second project. Same shape, different problem.',
    year: '2024',
    tags: ['Python', 'FastAPI'],
    href: '#',
  },
  {
    name: 'Project Three',
    description: 'Something smaller — a tool, a script, a weekend experiment.',
    year: '2024',
    tags: ['Rust'],
    href: '#',
  },
  {
    name: 'Project Four',
    description: 'Round out the grid so the layout reads evenly.',
    year: '2023',
    tags: ['TypeScript'],
    href: '#',
  },
]

export type Post = {
  title: string
  date: string
  readingTime: string
  excerpt: string
  href: string
}

export const posts: Post[] = [
  {
    title: 'The title of a post you have written',
    date: 'Jul 2026',
    readingTime: '6 min',
    excerpt: 'A one-line hook that makes the title worth clicking.',
    href: '#',
  },
  {
    title: 'Another post, on something you learned',
    date: 'Apr 2026',
    readingTime: '4 min',
    excerpt: 'Short enough to scan, specific enough to be interesting.',
    href: '#',
  },
  {
    title: 'A third, older post',
    date: 'Nov 2025',
    readingTime: '9 min',
    excerpt: 'Keep the three or four most recent here and link out to the rest.',
    href: '#',
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const
