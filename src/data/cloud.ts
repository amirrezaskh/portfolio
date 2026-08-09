import {
  Atom,
  Binary,
  Blocks,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  ChartNetwork,
  Cloud,
  FlaskConical,
  Languages,
  Leaf,
  MessageSquare,
  Network,
  Boxes,
  ScanEye,
  ShieldCheck,
  Sigma,
  Sparkles,
  Split,
  Swords,
  Target,
  Volleyball,
  Waves,
} from 'lucide-react'
import {
  SiBlockchaindotcom,
  SiChessdotcom,
  SiCplusplus,
  SiCss,
  SiDatadog,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastify,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiRedis,
  SiTensorflow,
  SiTypescript,
} from '@icons-pack/react-simple-icons'
import type { IconComponent } from './content'

/**
 * The floating side clouds. Each category gets one gruvbox hue so the two
 * gutters read as a soft, colored mist rather than a legend of logos.
 */
export type CloudCategory = 'lang' | 'ai' | 'infra' | 'research' | 'personal'

export const CATEGORY_COLOR: Record<CloudCategory, string> = {
  lang: 'text-gv-blue',
  ai: 'text-gv-purple',
  infra: 'text-gv-aqua',
  research: 'text-gv-orange',
  personal: 'text-gv-green',
}

export type CloudItem = {
  label: string
  Icon: IconComponent
  category: CloudCategory
  /** Overrides the category hue when the icon reads better in its own color. */
  color?: string
}

/**
 * Deliberately includes repeats of the signature tools so the gutters feel
 * full. Order does not matter — the layout shuffles deterministically.
 */
export const cloudItems: CloudItem[] = [
  // Programming & web
  { label: 'Python', Icon: SiPython, category: 'lang' },
  { label: 'TypeScript', Icon: SiTypescript, category: 'lang' },
  { label: 'JavaScript', Icon: SiJavascript, category: 'lang' },
  { label: 'Java', Icon: SiOpenjdk, category: 'lang' },
  { label: 'C++', Icon: SiCplusplus, category: 'lang' },
  { label: 'React', Icon: SiReact, category: 'lang' },
  { label: 'Node.js', Icon: SiNodedotjs, category: 'lang' },
  { label: 'Express', Icon: SiExpress, category: 'lang' },
  { label: 'NestJS', Icon: SiNestjs, category: 'lang' },
  { label: 'Django', Icon: SiDjango, category: 'lang' },
  { label: 'Flask', Icon: SiFlask, category: 'lang' },
  { label: 'Fastify', Icon: SiFastify, category: 'lang' },
  { label: 'HTML', Icon: SiHtml5, category: 'lang' },
  { label: 'CSS', Icon: SiCss, category: 'lang' },

  // AI / ML
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai' },
  { label: 'TensorFlow', Icon: SiTensorflow, category: 'ai' },
  { label: 'Hugging Face', Icon: SiHuggingface, category: 'ai' },
  { label: 'LangChain', Icon: SiLangchain, category: 'ai' },
  { label: 'Machine Learning', Icon: Brain, category: 'ai' },
  { label: 'Deep Learning', Icon: BrainCircuit, category: 'ai' },
  { label: 'Generative AI', Icon: Sparkles, category: 'ai' },
  { label: 'LLMs', Icon: MessageSquare, category: 'ai' },
  { label: 'Multi-Agent Systems', Icon: Bot, category: 'ai' },
  { label: 'Computer Vision', Icon: ScanEye, category: 'ai' },
  { label: 'NLP', Icon: Languages, category: 'ai' },
  { label: 'Reinforcement Learning', Icon: Target, category: 'ai' },

  // Data / infrastructure
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra' },
  { label: 'PostgreSQL', Icon: SiPostgresql, category: 'infra' },
  { label: 'Redis', Icon: SiRedis, category: 'infra' },
  { label: 'AWS', Icon: Cloud, category: 'infra' },
  { label: 'Docker', Icon: SiDocker, category: 'infra' },
  { label: 'Git', Icon: SiGit, category: 'infra' },
  { label: 'Linux', Icon: SiLinux, category: 'infra' },
  { label: 'CI/CD', Icon: SiGithubactions, category: 'infra' },
  { label: 'Datadog', Icon: SiDatadog, category: 'infra' },

  // Research
  { label: 'Federated Learning', Icon: Network, category: 'research' },
  { label: 'Split Learning', Icon: Split, category: 'research' },
  { label: 'Distributed AI', Icon: ChartNetwork, category: 'research' },
  { label: 'Blockchain', Icon: SiBlockchaindotcom, category: 'research' },
  { label: 'Hyperledger Fabric', Icon: Blocks, category: 'research' },
  { label: 'Privacy-Preserving AI', Icon: ShieldCheck, category: 'research' },
  { label: 'Synthetic Data', Icon: FlaskConical, category: 'research' },
  { label: 'Distributed Systems', Icon: Boxes, category: 'research' },

  // Personal
  { label: 'Canada', Icon: Leaf, category: 'personal', color: 'text-gv-red' },
  { label: 'Basketball', Icon: Volleyball, category: 'personal' },
  { label: 'Chess', Icon: SiChessdotcom, category: 'personal' },
  { label: 'Brazilian Jiu-Jitsu', Icon: Swords, category: 'personal' },
  { label: 'Swimming', Icon: Waves, category: 'personal' },
  { label: 'Reading', Icon: BookOpen, category: 'personal' },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'Computer Science', Icon: Binary, category: 'personal' },
  { label: 'Mathematics', Icon: Sigma, category: 'personal' },

  // Repeats — the ones worth seeing more than once.
  { label: 'Python', Icon: SiPython, category: 'lang' },
  { label: 'Python', Icon: SiPython, category: 'lang' },
  { label: 'TypeScript', Icon: SiTypescript, category: 'lang' },
  { label: 'TypeScript', Icon: SiTypescript, category: 'lang' },
  { label: 'React', Icon: SiReact, category: 'lang' },
  { label: 'React', Icon: SiReact, category: 'lang' },
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai' },
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai' },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra' },
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra' },
  { label: 'PostgreSQL', Icon: SiPostgresql, category: 'infra' },
  { label: 'PostgreSQL', Icon: SiPostgresql, category: 'infra' },
  { label: 'Basketball', Icon: Volleyball, category: 'personal' },
  { label: 'Basketball', Icon: Volleyball, category: 'personal' },
  { label: 'Docker', Icon: SiDocker, category: 'infra' },
  { label: 'Linux', Icon: SiLinux, category: 'infra' },
  { label: 'Git', Icon: SiGit, category: 'infra' },
  { label: 'Machine Learning', Icon: Brain, category: 'ai' },
  { label: 'Deep Learning', Icon: BrainCircuit, category: 'ai' },
  { label: 'LLMs', Icon: MessageSquare, category: 'ai' },
  { label: 'Chess', Icon: SiChessdotcom, category: 'personal' },
  { label: 'Mathematics', Icon: Sigma, category: 'personal' },
]
