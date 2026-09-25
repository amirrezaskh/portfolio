import type { ComponentType } from 'react'
import { GraduationCap } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

/**
 * All page copy lives here so the components stay pure layout.
 * Everything below is placeholder — swap in the real details.
 */

/** Anything that renders an icon at a caller-supplied size. */
export type IconComponent = ComponentType<{ className?: string }>

export const profile = {
  name: 'Amirreza Sokhankhosh',
  role: 'Machine Learning Engineer',
  location: 'Toronto, Canada',
  photo: '/portrait.jpg',
  email: 'amirreza.sokhankhosh@gmail.com',
  resumeUrl: '#',
  intro:
    `Software Engineer specialized in ML, Gen AI, and distributed AI. Experienced in building production-scale AI
applications, model training, and developing scalable ML infrastructure for enterprise and research environments.`,
  about: [
    'A paragraph with more room. What I work on day to day, the kinds of problems I like, and the tools I reach for first.',
    'A second paragraph for background — where I studied, what I did before, and anything that explains how I got here.',
  ],
}

export type Social = {
  label: string
  href: string
  icon: IconComponent
}

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/amirrezaskh', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amirrezaskh/', icon: LinkedinIcon },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.ca/citations?user=yRG4JwEAAAAJ&hl=en',
    icon: GraduationCap,
  },
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
    role: 'Machine Learning Engineer',
    company: 'Layer 6 AI, TD',
    href: 'https://www.linkedin.com/company/layer-6-ai/',
    period: 'Sep 2026 — Present',
    summary:
      '',
    tags: [],
  },
  {
    role: 'Senior Software Engineer',
    company: 'STAN AI',
    href: 'https://www.linkedin.com/company/stanai/',
    period: 'Nov 2025 — Sep 2025',
    summary:
      '',
    tags: ['Typescript', 'MongoDB', 'AWS'],
  },
  {
    role: 'Research Assistant',
    company: 'TCDT, University of Manitoba',
    href: 'https://tcdt.ca/',
    period: 'Sep 2023 - Sep 2025',
    summary: '',
    tags: ['Hyperledger Fabric', 'PyTorch', 'TensorFlow'],
  },
]

export type Project = {
  name: string
  description: string
  year: string
  tags: string[]
  /** Where the title links to. */
  href?: string
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Aria',
    description:
      `AI-powered resume and cover letter generator with Chrome extension integration, vector similarity search, and intelligent job matching using OpenAI and LangChain`,
    year: '2025',
    tags: ['Langchain', 'RAG', 'ChromaDB'],
    // href: '#',
    repoUrl: 'https://github.com/amirrezaskh/Aria',
    // liveUrl: '#',
  },
  {
    name: 'BPFL',
    description: `Blockchain-enabled Personalized Federated Learning framework combining PyTorch, Hyperledger Fabric, and incentive mechanisms for decentralized ML with 38 experimental configurations across multiple datasets.`,
    year: '2025',
    tags: ['Blockchain', 'Distributed Learning'],
    // href: '#',
    repoUrl: 'https://github.com/amirrezaskh/BPFL',
  },
  {
    name: 'Digital Twin',
    description: `Blockchain-enabled federated learning system for smart building Digital Twins using Hyperledger Fabric and Temporal Fusion Transformers. Privacy-preserving IoT sensor prediction across 76 rooms with decentralized AI training.`,
    year: '2024',
    tags: ['Temporal Fusion Transformers'],
    // href: '#',
    repoUrl: 'https://github.com/amirrezaskh/DigitalTwin',
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
    title: 'Mafia and Reinforcement Learning',
    date: 'Aug 2026',
    readingTime: '10 min',
    excerpt: 'A one-line hook that makes the title worth clicking.',
    href: '#',
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  // { id: 'contact', label: 'Contact' },
] as const
