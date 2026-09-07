# Code Origin AI Learning Studio

A premium, responsive learner experience for Code Origin.AI Private Limited. The current repository ships a Vite + React + TypeScript learning product with data-driven lesson content, live server update signals, interactive concept simulations, a browser digital notebook with mentor analysis, Python lab, RAG pipeline laboratory, agent simulator, projects, analytics, certificates, settings and help.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Checks

```bash
npm run build
npm test
```

## Product surface

- **Dashboard** — daily plan, progress signals, skill points, streak, path rail and project studio.
- **Learning path / catalogue** — the 11-module systems-first path from AI Foundations through Production AI, with module states and progress.
- **Live lesson player** — a complete 161-lesson curriculum across all 11 modules, with searchable/module-filtered navigation, structured explanations, digital avatar scenes, runnable examples, practice, quizzes, bookmarks and per-lesson progress persistence.
- **Live visual studios** — a working neural-network simulator with editable input/weight/bias/activation and backprop step, an embedding-space explorer, Python coding lab, stage-by-stage RAG pipeline, and agent loop with approval gate and memory inspection.
- **Digital notebook** — lesson-scoped notes autosave locally, support tags, call the protected `/api/notes/analyze` endpoint, display grounded concepts/confidence/next actions, and let the learner apply the mentor update back into the note.
- **Live course signals** — the dashboard fetches `/api/live-updates` with a server timestamp, source label, refresh state and offline fallback instead of pretending that static cards are live.
- **Portfolio / analytics** — project milestones, mastery signals, recommended revision, certificates and account preferences.

## Architecture notes

The learning product keeps domain data in `src/data.ts`, the complete curriculum in `src/courseCatalog.ts` and curated lesson primitives in `src/lessonContent.ts`, product composition in `src/App.tsx`, and all visual tokens/responsive behavior in `src/styles.css`. The client-side routing uses the History API so tabs and lessons do not reload the page. The backend exposes server-timestamped course updates, authenticated progress, contextual mentor responses and note analysis. The note-analysis fallback remains available offline; production deployments should replace the heuristic with a retrieval-grounded model call behind the same protected endpoint.

For production, wire the following behind protected server endpoints rather than exposing keys in the browser:

- secure session/JWT authentication and role-based access
- PostgreSQL + Prisma progress, course, assessment and certificate models
- Redis queues/cache for lab execution and live agent activity
- FastAPI/Node service for Python execution, mentor retrieval, RAG and agent workflows
- WebSocket/SSE stream for agent traces
- pgvector or a dedicated vector database for course retrieval

See `.env.example` for the client API boundary. Provider API keys must remain server-side.

## Accessibility

The UI has visible focus states, labelled controls, responsive mobile layouts, text alternatives for icon actions, and a `prefers-reduced-motion` stylesheet fallback. Use the Settings route to preview reduced-motion preference handling.
