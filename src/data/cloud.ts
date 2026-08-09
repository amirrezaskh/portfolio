import {
  Atom,
  Binary,
  Blocks,
  Bot,
  Boxes,
  Brain,
  BrainCircuit,
  ChartNetwork,
  Cloud,
  FlaskConical,
  Languages,
  MessageSquare,
  Network,
  ScanEye,
  ShieldCheck,
  Sigma,
  Sparkles,
  Split,
  Target,
} from 'lucide-react'
import {
  SiBlockchaindotcom,
  SiBlockchaindotcomHex,
  SiCplusplus,
  SiCplusplusHex,
  SiCss,
  SiCssHex,
  SiDatadog,
  SiDatadogHex,
  SiDjango,
  SiDjangoHex,
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiExpressHex,
  SiFastify,
  SiFastifyHex,
  SiFlask,
  SiFlaskHex,
  SiGit,
  SiGitHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiHtml5,
  SiHtml5Hex,
  SiHuggingface,
  SiHuggingfaceHex,
  SiJavascript,
  SiJavascriptHex,
  SiLangchain,
  SiLangchainHex,
  SiLinux,
  SiLinuxHex,
  SiMongodb,
  SiMongodbHex,
  SiNestjs,
  SiNestjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiOpenjdk,
  SiOpenjdkHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPytorch,
  SiPytorchHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiRedis,
  SiRedisHex,
  SiTensorflow,
  SiTensorflowHex,
  SiTypescript,
  SiTypescriptHex,
} from '@icons-pack/react-simple-icons'
import type { IconComponent } from './content'

/**
 * The floating side clouds.
 *
 * Three kinds of item:
 *   - brand logos, drawn in their real colors (`color`)
 *   - lucide glyphs for concepts, tinted with the category hue
 *   - emoji, where neither library has anything honest to offer
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
  category: CloudCategory
  /** A lucide or simple-icons component. Omit when using `emoji`. */
  Icon?: IconComponent
  /** Rendered instead of `Icon` when no glyph does the thing justice. */
  emoji?: string
  /** Brand hex. Falls back to the category hue when absent. */
  color?: string
}

/**
 * Deliberately includes repeats of the signature tools so the gutters feel
 * full. Order does not matter — the layout shuffles deterministically.
 */
export const cloudItems: CloudItem[] = [
  // Programming & web
  { label: 'Python', Icon: SiPython, category: 'lang', color: SiPythonHex },
  {
    label: 'TypeScript',
    Icon: SiTypescript,
    category: 'lang',
    color: SiTypescriptHex,
  },
  {
    label: 'JavaScript',
    Icon: SiJavascript,
    category: 'lang',
    color: SiJavascriptHex,
  },
  { label: 'Java', Icon: SiOpenjdk, category: 'lang', color: SiOpenjdkHex },
  { label: 'C++', Icon: SiCplusplus, category: 'lang', color: SiCplusplusHex },
  { label: 'React', Icon: SiReact, category: 'lang', color: SiReactHex },
  {
    label: 'Node.js',
    Icon: SiNodedotjs,
    category: 'lang',
    color: SiNodedotjsHex,
  },
  { label: 'Express', Icon: SiExpress, category: 'lang', color: SiExpressHex },
  { label: 'NestJS', Icon: SiNestjs, category: 'lang', color: SiNestjsHex },
  { label: 'Django', Icon: SiDjango, category: 'lang', color: SiDjangoHex },
  { label: 'Flask', Icon: SiFlask, category: 'lang', color: SiFlaskHex },
  { label: 'Fastify', Icon: SiFastify, category: 'lang', color: SiFastifyHex },
  { label: 'HTML', Icon: SiHtml5, category: 'lang', color: SiHtml5Hex },
  { label: 'CSS', Icon: SiCss, category: 'lang', color: SiCssHex },

  // AI / ML
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai', color: SiPytorchHex },
  {
    label: 'TensorFlow',
    Icon: SiTensorflow,
    category: 'ai',
    color: SiTensorflowHex,
  },
  {
    label: 'Hugging Face',
    Icon: SiHuggingface,
    category: 'ai',
    color: SiHuggingfaceHex,
  },
  {
    label: 'LangChain',
    Icon: SiLangchain,
    category: 'ai',
    color: SiLangchainHex,
  },
  { label: 'Machine Learning', Icon: Brain, category: 'ai' },
  { label: 'Deep Learning', Icon: BrainCircuit, category: 'ai' },
  { label: 'Generative AI', Icon: Sparkles, category: 'ai' },
  { label: 'LLMs', Icon: MessageSquare, category: 'ai' },
  { label: 'Multi-Agent Systems', Icon: Bot, category: 'ai' },
  { label: 'Computer Vision', Icon: ScanEye, category: 'ai' },
  { label: 'NLP', Icon: Languages, category: 'ai' },
  { label: 'Reinforcement Learning', Icon: Target, category: 'ai' },

  // Data / infrastructure
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra', color: SiMongodbHex },
  {
    label: 'PostgreSQL',
    Icon: SiPostgresql,
    category: 'infra',
    color: SiPostgresqlHex,
  },
  { label: 'Redis', Icon: SiRedis, category: 'infra', color: SiRedisHex },
  { label: 'AWS', Icon: Cloud, category: 'infra' },
  { label: 'Docker', Icon: SiDocker, category: 'infra', color: SiDockerHex },
  { label: 'Git', Icon: SiGit, category: 'infra', color: SiGitHex },
  { label: 'Linux', Icon: SiLinux, category: 'infra', color: SiLinuxHex },
  {
    label: 'CI/CD',
    Icon: SiGithubactions,
    category: 'infra',
    color: SiGithubactionsHex,
  },
  { label: 'Datadog', Icon: SiDatadog, category: 'infra', color: SiDatadogHex },

  // Research
  { label: 'Federated Learning', Icon: Network, category: 'research' },
  { label: 'Split Learning', Icon: Split, category: 'research' },
  { label: 'Distributed AI', Icon: ChartNetwork, category: 'research' },
  {
    label: 'Blockchain',
    Icon: SiBlockchaindotcom,
    category: 'research',
    color: SiBlockchaindotcomHex,
  },
  { label: 'Hyperledger Fabric', Icon: Blocks, category: 'research' },
  { label: 'Privacy-Preserving AI', Icon: ShieldCheck, category: 'research' },
  { label: 'Synthetic Data', Icon: FlaskConical, category: 'research' },
  { label: 'Distributed Systems', Icon: Boxes, category: 'research' },

  // Personal — emoji where no icon set has an honest answer.
  { label: 'Canada', emoji: '🇨🇦', category: 'personal' },
  { label: 'Basketball', emoji: '🏀', category: 'personal' },
  { label: 'Chess', emoji: '♟️', category: 'personal' },
  { label: 'Brazilian Jiu-Jitsu', emoji: '🥋', category: 'personal' },
  { label: 'Swimming', emoji: '🏊', category: 'personal' },
  { label: 'Reading', emoji: '📚', category: 'personal' },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'Computer Science', Icon: Binary, category: 'personal' },
  { label: 'Mathematics', Icon: Sigma, category: 'personal' },

  // Repeats — the ones worth seeing more than once.
  { label: 'Python', Icon: SiPython, category: 'lang', color: SiPythonHex },
  { label: 'Python', Icon: SiPython, category: 'lang', color: SiPythonHex },
  {
    label: 'TypeScript',
    Icon: SiTypescript,
    category: 'lang',
    color: SiTypescriptHex,
  },
  {
    label: 'TypeScript',
    Icon: SiTypescript,
    category: 'lang',
    color: SiTypescriptHex,
  },
  { label: 'React', Icon: SiReact, category: 'lang', color: SiReactHex },
  { label: 'React', Icon: SiReact, category: 'lang', color: SiReactHex },
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai', color: SiPytorchHex },
  { label: 'PyTorch', Icon: SiPytorch, category: 'ai', color: SiPytorchHex },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'AI', Icon: Atom, category: 'personal' },
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra', color: SiMongodbHex },
  { label: 'MongoDB', Icon: SiMongodb, category: 'infra', color: SiMongodbHex },
  {
    label: 'PostgreSQL',
    Icon: SiPostgresql,
    category: 'infra',
    color: SiPostgresqlHex,
  },
  {
    label: 'PostgreSQL',
    Icon: SiPostgresql,
    category: 'infra',
    color: SiPostgresqlHex,
  },
  { label: 'Basketball', emoji: '🏀', category: 'personal' },
  { label: 'Basketball', emoji: '🏀', category: 'personal' },
  { label: 'Docker', Icon: SiDocker, category: 'infra', color: SiDockerHex },
  { label: 'Linux', Icon: SiLinux, category: 'infra', color: SiLinuxHex },
  { label: 'Git', Icon: SiGit, category: 'infra', color: SiGitHex },
  { label: 'Machine Learning', Icon: Brain, category: 'ai' },
  { label: 'Deep Learning', Icon: BrainCircuit, category: 'ai' },
  { label: 'LLMs', Icon: MessageSquare, category: 'ai' },
  { label: 'Chess', emoji: '♟️', category: 'personal' },
  { label: 'Mathematics', Icon: Sigma, category: 'personal' },
]
