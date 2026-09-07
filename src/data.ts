import { lessonCountsByModule } from './courseCatalog'
import type { LucideIcon } from 'lucide-react'
import {
  Bot, BrainCircuit, Boxes, Braces, Database, GitBranch, Layers3, Network, Rocket, Sparkles,
} from 'lucide-react'

export type Module = {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  lessons: number
  minutes: number
  progress: number
  color: string
  icon: LucideIcon
  status: 'complete' | 'current' | 'locked'
}

export const modules: Module[] = [
  { id: 'foundations', number: '01', title: 'AI Foundations', subtitle: 'Build the mental model', description: 'From everyday automation to models that learn from data.', lessons: lessonCountsByModule.foundations, minutes: 168, progress: 100, color: '#d6a84b', icon: BrainCircuit, status: 'complete' },
  { id: 'machine-learning', number: '02', title: 'Machine Learning', subtitle: 'Find patterns in data', description: 'Build, evaluate and improve your first predictive systems.', lessons: lessonCountsByModule['machine-learning'], minutes: 214, progress: 68, color: '#70d1c3', icon: Network, status: 'current' },
  { id: 'deep-learning', number: '03', title: 'Deep Learning', subtitle: 'Learn with neural nets', description: 'See how layers, weights and gradients create intelligence.', lessons: lessonCountsByModule['deep-learning'], minutes: 192, progress: 0, color: '#a995e8', icon: Layers3, status: 'locked' },
  { id: 'generative-ai', number: '04', title: 'Generative AI', subtitle: 'Create with foundation models', description: 'Tokens, context and the architecture behind modern AI.', lessons: lessonCountsByModule['generative-ai'], minutes: 180, progress: 0, color: '#e98d83', icon: Sparkles, status: 'locked' },
  { id: 'prompt-engineering', number: '05', title: 'Prompt Engineering', subtitle: 'Design better model behavior', description: 'Reliable prompts, structured outputs, evaluation and safety.', lessons: lessonCountsByModule['prompt-engineering'], minutes: 196, progress: 0, color: '#d6a84b', icon: Braces, status: 'locked' },
  { id: 'llm-engineering', number: '06', title: 'LLM Engineering', subtitle: 'Design reliable language apps', description: 'Move from prompting to production-grade LLM systems.', lessons: lessonCountsByModule['llm-engineering'], minutes: 248, progress: 0, color: '#d6a84b', icon: Braces, status: 'locked' },
  { id: 'embeddings', number: '07', title: 'Embeddings & Vectors', subtitle: 'Give meaning coordinates', description: 'Explore semantic space, similarity and vector search.', lessons: lessonCountsByModule.embeddings, minutes: 144, progress: 0, color: '#70d1c3', icon: Boxes, status: 'locked' },
  { id: 'rag', number: '08', title: 'Retrieval-Augmented Gen', subtitle: 'Ground answers in evidence', description: 'Build a document question-answering pipeline with citations.', lessons: lessonCountsByModule.rag, minutes: 276, progress: 0, color: '#a995e8', icon: Database, status: 'locked' },
  { id: 'agents', number: '09', title: 'AI Agents', subtitle: 'Give models a way to act', description: 'Tools, memory, planning and the agent execution loop.', lessons: lessonCountsByModule.agents, minutes: 220, progress: 0, color: '#e98d83', icon: Bot, status: 'locked' },
  { id: 'agentic-ai', number: '10', title: 'Agentic AI', subtitle: 'Orchestrate intelligent work', description: 'Multi-agent systems, handoffs, guardrails and evaluation.', lessons: lessonCountsByModule['agentic-ai'], minutes: 252, progress: 0, color: '#a995e8', icon: GitBranch, status: 'locked' },
  { id: 'production', number: '11', title: 'Production AI', subtitle: 'Ship with confidence', description: 'Deploy, observe and secure AI systems that last.', lessons: lessonCountsByModule.production, minutes: 312, progress: 0, color: '#d6a84b', icon: Rocket, status: 'locked' },
]

export const lessonTopics = [
  { id: 'workflow', label: 'Complete ML workflow', type: 'Lesson', progress: 100, duration: '12 min' },
  { id: 'features', label: 'Feature engineering', type: 'Lab', progress: 100, duration: '18 min' },
  { id: 'splits', label: 'Train, validation & test sets', type: 'Lesson', progress: 72, duration: '14 min' },
  { id: 'classification', label: 'Classification systems', type: 'Interactive', progress: 0, duration: '22 min' },
  { id: 'evaluation', label: 'Precision, recall & F1', type: 'Lab', progress: 0, duration: '26 min' },
  { id: 'overfitting', label: 'Overfitting & underfitting', type: 'Simulation', progress: 0, duration: '20 min' },
]

export const pathNodes = [
  { label: 'AI Foundations', short: 'Foundations', progress: 100, status: 'complete', icon: BrainCircuit },
  { label: 'Machine Learning', short: 'ML', progress: 68, status: 'active', icon: Network },
  { label: 'Deep Learning', short: 'Deep Learning', progress: 0, status: 'locked', icon: Layers3 },
  { label: 'Generative AI', short: 'GenAI', progress: 0, status: 'locked', icon: Sparkles },
  { label: 'Prompt Engineering', short: 'Prompts', progress: 0, status: 'locked', icon: Braces },
  { label: 'LLM Engineering', short: 'LLMs', progress: 0, status: 'locked', icon: Braces },
  { label: 'Embeddings & Vectors', short: 'Vectors', progress: 0, status: 'locked', icon: Boxes },
  { label: 'RAG', short: 'RAG', progress: 0, status: 'locked', icon: Database },
  { label: 'AI Agents', short: 'Agents', progress: 0, status: 'locked', icon: Bot },
  { label: 'Agentic AI', short: 'Agentic', progress: 0, status: 'locked', icon: GitBranch },
  { label: 'Multi-Agent Systems', short: 'Multi-agent', progress: 0, status: 'locked', icon: GitBranch },
  { label: 'Production AI', short: 'Deploy', progress: 0, status: 'locked', icon: Rocket },
]

export const stats = [
  { value: '68%', label: 'Course progress', meta: '+8% this week', tone: 'gold' },
  { value: '12', label: 'Day streak', meta: 'Personal best: 18', tone: 'green' },
  { value: '2,480', label: 'Skill points', meta: 'Top 14% of learners', tone: 'violet' },
  { value: '34h', label: 'Learning time', meta: '+2h 40m this week', tone: 'cyan' },
]

export const projects = [
  { title: 'Prompt Engineering Studio', tag: 'In progress', progress: 72, meta: '4 / 6 milestones', color: '#d6a84b' },
  { title: 'Document Q&A with RAG', tag: 'Up next', progress: 0, meta: '6 milestones · 4h', color: '#70d1c3' },
  { title: 'AI Customer-Support Agent', tag: 'Locked', progress: 0, meta: '8 milestones · 6h', color: '#a995e8' },
]

export const schedule = [
  { day: '18', month: 'JUN', title: 'Live teardown: RAG systems', detail: 'with Anika Rao · 45 min', time: '10:30 AM', color: 'gold' },
  { day: '20', month: 'JUN', title: 'Office hours: model evaluation', detail: 'Open cohort session · 60 min', time: '04:00 PM', color: 'violet' },
]
