export type LessonStage = {
  id: string
  label: string
  title: string
  explanation: string
  technical: string
  failure: string
}

export type LiveLesson = {
  id: string
  module: string
  moduleNumber: string
  title: string
  question: string
  duration: string
  difficulty: string
  objectives: string[]
  analogy: string
  summary: string
  stages: LessonStage[]
  code: string
  output: string
  mistakes: string[]
  interview: string[]
  practiceQuestion?: string
  practiceOptions?: string[]
  practiceAnswer?: string
  quizQuestion?: string
  quizOptions?: string[]
  quizAnswer?: string
}

export const liveLessons: LiveLesson[] = [
  {
    id: 'train-validation-test',
    module: 'Machine Learning',
    moduleNumber: '02',
    title: 'Train, validation & test sets',
    question: 'How do we know if a model learned — or just memorised?',
    duration: '14 min',
    difficulty: 'Intermediate',
    objectives: ['Explain the purpose of each dataset split', 'Tune decisions without contaminating the final benchmark', 'Spot leakage before it reaches production'],
    analogy: 'Training is practice with an instructor. Validation is choosing the route and car. Testing is the final driving exam on a road you have never seen.',
    summary: 'A reliable model is measured on examples that did not influence its parameters or your tuning decisions. We separate learning, decision-making and the final report.',
    stages: [
      { id: 'train', label: '01', title: 'Fit on training data', explanation: 'The model sees training examples and adjusts its parameters to reduce error.', technical: 'Gradient updates minimise a loss function over the training set.', failure: 'Too little data creates unstable parameters; duplicated examples can hide leakage.' },
      { id: 'validate', label: '02', title: 'Tune with validation data', explanation: 'Use a second set to choose features, thresholds and hyperparameters.', technical: 'Validation estimates generalisation while model choices are still changing.', failure: 'Repeatedly checking the test set turns it into a hidden training signal.' },
      { id: 'test', label: '03', title: 'Report once on test data', explanation: 'The sealed test set is the closest thing to an honest final exam.', technical: 'Report metrics after all design decisions are frozen.', failure: 'A contaminated test score is optimistic and cannot support a production claim.' },
    ],
    code: `from sklearn.model_selection import train_test_split\n\nX_train, X_holdout, y_train, y_holdout = train_test_split(\n    X, y, test_size=0.30, random_state=42\n)\n\nX_val, X_test, y_val, y_test = train_test_split(\n    X_holdout, y_holdout, test_size=0.50, random_state=42\n)`,
    output: 'train: (700, 4)\nvalidation: (150, 4)\ntest: (150, 4)',
    mistakes: ['Tuning a threshold on test data', 'Splitting after normalising with all rows', 'Ignoring duplicate or time-dependent records'],
    interview: ['Why should the test set be used only once?', 'When would you use cross-validation?', 'What is data leakage in a feature pipeline?'],
  },
  {
    id: 'what-is-an-embedding',
    module: 'Embeddings & Vectors',
    moduleNumber: '07',
    title: 'What is an embedding?',
    question: 'How can a machine compare the meaning of two sentences?',
    duration: '18 min',
    difficulty: 'Intermediate',
    objectives: ['Describe how text becomes a vector', 'Interpret similarity without confusing it with truth', 'Choose metadata filters for retrieval'],
    analogy: 'Imagine a map where places with similar climates are close together. An embedding is a meaning map for language, not a list of dictionary definitions.',
    summary: 'An embedding model maps text into a high-dimensional numeric space. Distance is useful for retrieval, clustering and recommendations, but the coordinates are learned representations rather than human-readable facts.',
    stages: [
      { id: 'tokenise', label: '01', title: 'Split and encode text', explanation: 'Text is normalised and represented as tokens before the model processes it.', technical: 'Token IDs are looked up and transformed through learned layers.', failure: 'Very long inputs can be truncated or lose important context.' },
      { id: 'project', label: '02', title: 'Project into semantic space', explanation: 'The encoder places related meanings near each other.', technical: 'The final pooled representation is a vector such as 768 or 1536 dimensions.', failure: 'Similarity reflects the training distribution and can encode unwanted bias.' },
      { id: 'retrieve', label: '03', title: 'Compare vectors', explanation: 'Cosine similarity or another distance ranks candidate chunks.', technical: 'Indexes accelerate nearest-neighbour search over stored vectors.', failure: 'Nearest does not always mean relevant; filters and reranking still matter.' },
    ],
    code: `from sentence_transformers import SentenceTransformer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nmodel = SentenceTransformer("all-MiniLM-L6-v2")\nquery = model.encode(["How do I evaluate retrieval?"])\ndocs = model.encode(["Measure recall at k.", "Bake the cake at 180C."])\nprint(cosine_similarity(query, docs).round(3))`,
    output: '[[0.812 0.107]]',
    mistakes: ['Treating a 2D visualisation as the full vector', 'Comparing vectors from different embedding models', 'Skipping metadata and access-control filters'],
    interview: ['Why use cosine similarity?', 'What does vector dimension mean?', 'When is hybrid search better than vector-only search?'],
  },
]

export const liveTopicFeed = [
  { id: 'topic-1', label: 'SYSTEM UPDATE', title: 'RAG evaluation lab refreshed', detail: 'New faithfulness and context-relevance checks are available in the laboratory.', tone: 'cyan' },
  { id: 'topic-2', label: 'NEW LESSON', title: 'Embeddings are now interactive', detail: 'Compare semantic distance with live vector points and metadata filters.', tone: 'gold' },
  { id: 'topic-3', label: 'MENTOR NOTE', title: 'Try the failure mode first', detail: 'The fastest way to understand an AI system is to break one assumption and inspect the trace.', tone: 'violet' },
]
