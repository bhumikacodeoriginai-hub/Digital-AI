import type { LiveLesson, LessonStage } from './lessonContent'
import { liveLessons as curatedLessons } from './lessonContent'

export type CatalogModule = {
  id: string
  number: string
  title: string
  topics: string[]
}

export const catalogModules: CatalogModule[] = [
  { id: 'foundations', number: '01', title: 'AI Foundations', topics: ['What is Artificial Intelligence?', 'AI vs automation', 'AI vs Machine Learning', 'Machine Learning vs Deep Learning', 'Types of AI', 'Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Training data, features and labels', 'Models, training, inference and prediction', 'Real-world AI applications', 'Responsible AI foundations'] },
  { id: 'machine-learning', number: '02', title: 'Machine Learning', topics: ['Complete ML workflow', 'Data collection and preparation', 'Feature engineering', 'Train, validation & test sets', 'Classification', 'Regression', 'Clustering', 'Overfitting and underfitting', 'Accuracy, precision, recall and F1 score', 'Model evaluation', 'Cross-validation', 'Practical Python and scikit-learn labs', 'Model selection', 'ML project: churn prediction'] },
  { id: 'deep-learning', number: '03', title: 'Deep Learning', topics: ['Neurons and neural networks', 'Weights, bias and activation functions', 'Forward propagation', 'Loss functions', 'Backpropagation', 'Gradient descent', 'CNN basics', 'RNN basics', 'Training a simple neural network', 'TensorFlow and PyTorch introduction'] },
  { id: 'generative-ai', number: '04', title: 'Generative AI', topics: ['What is Generative AI?', 'Traditional AI vs Generative AI', 'Text, image, audio, video and code generation', 'Foundation models', 'Multimodal models', 'Tokens', 'Context windows', 'Temperature and sampling', 'Hallucination', 'Responsible Generative AI', 'Generative AI application architecture'] },
  { id: 'prompt-engineering', number: '05', title: 'Prompt Engineering', topics: ['Zero-shot prompting', 'One-shot prompting', 'Few-shot prompting', 'Role prompting', 'Contextual prompting', 'Structured output', 'Prompt templates', 'Chain-of-thought concepts', 'Prompt injection', 'Prompt evaluation', 'Building a reusable prompt library'] },
  { id: 'llm-engineering', number: '06', title: 'Large Language Models', topics: ['How an LLM works', 'Tokenization', 'Embeddings', 'Transformer architecture', 'Attention and self-attention', 'Positional encoding', 'Pretraining', 'Instruction tuning', 'Alignment', 'Inference', 'Model parameters', 'Context management', 'Open-source vs API models', 'Model selection', 'Cost and latency'] },
  { id: 'embeddings', number: '07', title: 'Embeddings and Vector Databases', topics: ['What is an embedding?', 'Converting text into vectors', 'Dimensions', 'Similarity search', 'Cosine similarity', 'Euclidean distance', 'Semantic search', 'Metadata filtering', 'Vector indexing', 'FAISS', 'Chroma', 'Pinecone', 'Weaviate', 'pgvector', 'Selecting a vector database'] },
  { id: 'rag', number: '08', title: 'Retrieval-Augmented Generation', topics: ['What is RAG?', 'Why RAG is required', 'RAG vs fine-tuning', 'Document loading', 'Text extraction', 'Cleaning', 'Chunking', 'Chunk size and overlap', 'Embedding generation', 'Vector storage', 'Retrieval', 'Reranking', 'Prompt augmentation', 'Answer generation', 'Source citations', 'Hybrid search', 'Query transformation', 'RAG evaluation', 'Advanced RAG', 'Document question-answering project'] },
  { id: 'agents', number: '09', title: 'AI Agents', topics: ['What is an AI agent?', 'Agent vs chatbot', 'Goals', 'Planning', 'Reasoning', 'Tools', 'Memory', 'Observations', 'Actions', 'Agent loop', 'Function calling', 'API integration', 'Short-term and long-term memory', 'Human approval', 'Agent failure handling', 'LangChain agents', 'LangGraph workflows'] },
  { id: 'agentic-ai', number: '10', title: 'Agentic AI', topics: ['Agentic workflows', 'Autonomous decision-making', 'Workflow vs agent', 'Single-agent systems', 'Multi-agent systems', 'Orchestrator agents', 'Research agents', 'Planning agents', 'Execution agents', 'Reviewer agents', 'Shared state', 'Agent communication', 'Handoffs', 'Guardrails', 'Human-in-the-loop', 'Agent evaluation', 'Cost control', 'Multi-agent project'] },
  { id: 'production', number: '11', title: 'Production AI', topics: ['FastAPI backend', 'Authentication and role-based access', 'PostgreSQL', 'Vector database integration', 'Docker', 'AWS deployment', 'Logging', 'Tracing', 'Monitoring', 'Prompt versioning', 'Model evaluation', 'Latency optimisation', 'Token-cost monitoring', 'Data privacy', 'PII protection', 'AI security', 'Responsible AI', 'Production guardrails'] },
]

const moduleContexts: Record<string, { question: string; analogy: string; summary: string; technical: string; failure: string; code: string; output: string }> = {
  foundations: { question: 'Where does intelligence enter a system?', analogy: 'A calculator follows a recipe. An AI system uses examples and feedback to choose a useful answer when the exact recipe was not written.', summary: 'Artificial intelligence is a system capability, not a magic label. It combines data, representations, objectives and decisions to produce useful behaviour.', technical: 'An AI pipeline maps inputs to outputs through rules, learned parameters or a combination of both.', failure: 'A system can appear intelligent while using shortcuts, biased data or a metric that does not match the real goal.', code: 'examples = ["spam", "not spam"]\nlabel = "spam"\nprint(f"model input: {label}")', output: 'model input: spam' },
  'machine-learning': { question: 'How does a model find a pattern that generalises?', analogy: 'Learning to recognise a dog is not memorising one photograph; it is noticing features that survive different lighting, angles and backgrounds.', summary: 'Machine learning fits parameters from examples, measures error on unseen data and iterates until the system is useful rather than merely familiar.', technical: 'A training objective is optimised over feature vectors and labels, then evaluated with metrics on held-out examples.', failure: 'A high training score can hide leakage, imbalance, overfitting or a mismatch between offline metrics and real users.', code: 'from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression().fit(X_train, y_train)\nprint(model.score(X_test, y_test))', output: '0.91' },
  'deep-learning': { question: 'How do layers turn numbers into useful representations?', analogy: 'A team of specialists passes a signal along: early layers notice simple shapes, later layers combine them into concepts.', summary: 'Deep learning composes many differentiable transformations so representations can be learned directly from data.', technical: 'Forward passes compute activations, a loss measures error, and backpropagation applies the chain rule to update weights.', failure: 'Unscaled inputs, unstable gradients, weak data and an oversized model can prevent learning or produce brittle shortcuts.', code: 'import torch\nx = torch.tensor([[0.4, 0.8]])\nlayer = torch.nn.Linear(2, 1)\nprint(layer(x).shape)', output: 'torch.Size([1, 1])' },
  'generative-ai': { question: 'How can a model produce something it has not copied?', analogy: 'A skilled improviser has learned patterns from many examples and can compose a new response within the constraints of the prompt.', summary: 'Generative models learn a probability distribution over data and sample a new sequence, image, sound or program from that distribution.', technical: 'Generation repeatedly samples a conditional distribution p(next token | context), often with decoding controls such as temperature.', failure: 'Fluent output can still be unsupported, unsafe, copyrighted or wrong when the prompt asks for information outside the model evidence.', code: 'prompt = "Explain a neural network in one sentence"\nprint("A model that learns weighted patterns.")', output: 'A model that learns weighted patterns.' },
  'prompt-engineering': { question: 'How do instructions change model behaviour?', analogy: 'A briefing is more useful when it states the role, objective, context, constraints and format instead of saying only “do this”.', summary: 'Prompt engineering is the disciplined design and evaluation of model inputs so outputs are clearer, safer and more consistent.', technical: 'A prompt defines task context and output constraints; evaluation compares responses against a rubric rather than relying on one impressive example.', failure: 'Hidden assumptions, injection text, ambiguous formats and untested edge cases make prompts unreliable.', code: 'prompt = "Return JSON with keys: answer, confidence. Question: {question}"\nprint(prompt.format(question="What is RAG?"))', output: 'Return JSON with keys: answer, confidence. Question: What is RAG?' },
  'llm-engineering': { question: 'What happens between text and the next token?', analogy: 'An LLM is a very large autocomplete that first turns language into coordinates, mixes context with attention, then predicts one token at a time.', summary: 'Large language models combine tokenisation, embeddings, transformer blocks and decoding to model language at scale.', technical: 'Self-attention creates context-dependent representations; the final logits become a probability distribution over the vocabulary.', failure: 'Context overflow, token cost, latency, poor model choice and unsupported outputs can break a production LLM feature.', code: 'tokens = ["AI", "learns", "from", "data"]\nprint(len(tokens), "tokens")', output: '4 tokens' },
  embeddings: { question: 'How can a machine compare the meaning of two sentences?', analogy: 'Imagine a map where places with similar climates are close together. An embedding is a meaning map for language, not a list of dictionary definitions.', summary: 'An embedding model maps text into a high-dimensional numeric space. Distance is useful for retrieval, clustering and recommendations, but the coordinates are learned representations rather than human-readable facts.', technical: 'The encoder returns a fixed-length vector; nearest-neighbour search ranks candidates by a distance function such as cosine similarity.', failure: 'Nearest does not always mean relevant; mismatched models, bias and missing metadata filters can return misleading results.', code: 'from sklearn.metrics.pairwise import cosine_similarity\nprint(cosine_similarity([[1, 0]], [[0.8, 0.2]]).round(3))', output: '[[0.97]]' },
  rag: { question: 'How can a model answer from a private source of truth?', analogy: 'RAG is an open-book exam: retrieve the relevant pages first, then ask the model to answer with those pages visible.', summary: 'Retrieval-augmented generation grounds generation in retrieved evidence instead of relying only on parameters learned during pretraining.', technical: 'Documents become chunks and vectors; a query retrieves candidates that are inserted into a constrained generation prompt.', failure: 'Bad extraction, poor chunk boundaries, irrelevant retrieval and missing citations produce confident but unsupported answers.', code: 'chunks = ["RAG retrieves evidence", "Fine-tuning changes weights"]\nquestion = "What does RAG retrieve?"\nprint(chunks[0])', output: 'RAG retrieves evidence' },
  agents: { question: 'When should a model decide to use a tool?', analogy: 'A chatbot can answer from conversation. An agent is closer to a coordinator who can inspect systems, call tools and verify the result.', summary: 'An AI agent uses a model to choose actions in a loop, observes tool results and updates its state until a goal is met or a guardrail stops it.', technical: 'The loop alternates model planning, validated function calls, tool execution, observation and termination checks.', failure: 'Unbounded loops, unsafe tools, stale memory and missing human approval can turn a plausible plan into a damaging action.', code: 'tool = {"name": "search_policy", "arguments": {"query": "refund"}}\nprint(tool["name"])', output: 'search_policy' },
  'agentic-ai': { question: 'How do multiple AI workers coordinate safely?', analogy: 'A production team has roles, handoffs, shared documents and a reviewer; autonomy without coordination is just noise.', summary: 'Agentic systems combine planning, delegation, shared state and guardrails to complete multi-step work across specialised workers.', technical: 'An orchestrator routes tasks through a state machine or graph, records messages and enforces approval, budget and termination policies.', failure: 'Conflicting goals, duplicated work, uncontrolled delegation and hidden state make multi-agent systems expensive and difficult to evaluate.', code: 'state = {"task": "research", "approved": False}\nstate["next"] = "reviewer"\nprint(state)', output: "{'task': 'research', 'approved': False, 'next': 'reviewer'}" },
  production: { question: 'What makes an AI system dependable after launch?', analogy: 'A prototype is a single successful flight. Production engineering adds a flight plan, instruments, maintenance, permissions and an emergency procedure.', summary: 'Production AI is the engineering discipline around reliability, security, cost, evaluation, monitoring and safe change management.', technical: 'A deployed system needs authenticated boundaries, observable requests, versioned prompts/models, tested fallbacks and data governance.', failure: 'A system without traces, rate limits, privacy controls or rollback paths cannot be operated responsibly at scale.', code: 'from fastapi import FastAPI\napp = FastAPI()\n@app.get("/health")\ndef health(): return {"status": "ok"}', output: '{"status":"ok"}' },
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const curatedByTitle = new Map(curatedLessons.map((lesson) => [lesson.title, lesson]))

function generatedLesson(module: CatalogModule, title: string, index: number): LiveLesson {
  const context = moduleContexts[module.id]
  const curated = curatedByTitle.get(title)
  if (curated) return {
    ...curated,
    id: `${module.id}-${slugify(title)}`,
    module: module.title,
    moduleNumber: module.number,
    practiceQuestion: `Which statement best describes ${title.toLowerCase()}?`,
    practiceOptions: [curated.summary, 'It removes the need for evaluation.', 'It is only a visual effect.'],
    practiceAnswer: curated.summary,
    quizQuestion: `Which engineering habit makes ${title.toLowerCase()} more reliable?`,
    quizOptions: ['Measure the output against a clear goal.', 'Skip edge cases when the demo works.', 'Hide the failure mode from the learner.'],
    quizAnswer: 'Measure the output against a clear goal.',
  }
  const words = title.toLowerCase()
  const isAdvanced = index > 5 || ['deployment', 'security', 'evaluation', 'architecture', 'project'].some((word) => words.includes(word))
  const stages: LessonStage[] = [
    { id: 'intuition', label: '01', title: 'Start with the system question', explanation: `${title} answers a concrete problem: ${context.question.toLowerCase()}`, technical: context.technical, failure: context.failure },
    { id: 'mechanism', label: '02', title: `Inspect ${title.toLowerCase()}`, explanation: context.summary, technical: `In ${module.title}, ${context.technical.toLowerCase()} This lesson focuses on ${title.toLowerCase()}.`, failure: context.failure },
    { id: 'practice', label: '03', title: 'Apply it and test the edge', explanation: `Use the example, change one assumption and observe whether the result still matches the goal.`, technical: `A useful implementation makes the input, transformation, output and evaluation signal explicit for ${title.toLowerCase()}.`, failure: `If the input, metric or boundary is hidden, ${title.toLowerCase()} can look successful while failing in real use.` },
  ]
  return {
    id: `${module.id}-${slugify(title)}`,
    module: module.title,
    moduleNumber: module.number,
    title,
    question: context.question,
    duration: `${12 + (index % 5) * 3} min`,
    difficulty: index < 3 ? 'Beginner' : isAdvanced ? 'Advanced' : 'Intermediate',
    objectives: [`Explain ${title.toLowerCase()} in your own words`, `Trace the input, process and output`, `Identify one production failure mode`],
    analogy: context.analogy,
    summary: context.summary,
    stages,
    code: context.code,
    output: context.output,
    mistakes: [context.failure, `Treating ${title.toLowerCase()} as a button instead of a measurable system`, 'Skipping a small, observable experiment before scaling'],
    interview: [`What problem does ${title.toLowerCase()} solve?`, `What input and output would you measure?`, `What failure would you test first?`],
    practiceQuestion: `Which statement best describes ${title.toLowerCase()}?`,
    practiceOptions: [context.summary, 'It removes the need for evaluation.', 'It is only a visual effect.'],
    practiceAnswer: context.summary,
    quizQuestion: `Which engineering habit makes ${title.toLowerCase()} more reliable?`,
    quizOptions: ['Measure the output against a clear goal.', 'Skip edge cases when the demo works.', 'Hide the failure mode from the learner.'],
    quizAnswer: 'Measure the output against a clear goal.',
  }
}

export const allLessons: LiveLesson[] = catalogModules.flatMap((module) => module.topics.map((topic, index) => generatedLesson(module, topic, index)))
export const lessonCount = allLessons.length
export const lessonCountsByModule = Object.fromEntries(catalogModules.map((module) => [module.id, module.topics.length]))
