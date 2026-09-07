# Code Origin AI Learning Studio

A premium, responsive learner experience for Code Origin.AI Private Limited. The current repository ships a Vite + React + TypeScript product surface focused on the learner workflow: dashboard, curriculum path, interactive lesson player, Python lab, RAG pipeline laboratory, agent simulator, projects, analytics, certificates, settings and help.

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
- **Learning path / catalogue** — the 9-module systems-first path from AI Foundations through Production AI, with module states and progress.
- **Lesson player** — Overview, Visualise, Learn, Code, Practise, Quiz and Notes tabs. Completion and bookmarks persist in local storage for the demo learner.
- **Interactive studios** — attention visualiser, Python coding lab, stage-by-stage RAG pipeline, and agent loop with approval gate and memory inspection.
- **Portfolio / analytics** — project milestones, mastery signals, recommended revision, certificates and account preferences.

## Architecture notes

The greenfield prototype keeps domain data in `src/data.ts`, product composition in `src/App.tsx`, and all visual tokens/responsive behavior in `src/styles.css`. The client-side routing uses the History API so tab changes do not reload the page. This makes it straightforward to move each route into Next.js App Router or a backend-backed application when the API/database layer is connected.

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
