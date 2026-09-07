"""Small production-shaped API boundary for the learning studio.

The in-memory repository keeps the greenfield demo runnable. Replace it with Prisma/PostgreSQL
repositories before shipping and keep provider keys behind these server-side endpoints.
"""
from datetime import datetime, timezone
from typing import Literal

from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="Code Origin AI Learning Studio API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH"],
    allow_headers=["Authorization", "Content-Type"],
)

DEMO_USER = {"id": "demo-student", "email": "arjun.rao@example.com", "name": "Arjun Rao", "role": "STUDENT"}
PROGRESS = {"courseProgress": 68, "streak": 12, "skillPoints": 2480, "completedLessons": 26}

class LoginRequest(BaseModel):
    email: str
    password: str = Field(min_length=8)

class ProgressUpdate(BaseModel):
    lessonId: str
    percent: int = Field(ge=0, le=100)
    status: Literal["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]

class MentorRequest(BaseModel):
    question: str = Field(min_length=2, max_length=2000)
    lessonId: str
    level: Literal["beginner", "intermediate", "advanced"] = "intermediate"

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "code-origin-ai-learning-studio", "time": datetime.now(timezone.utc).isoformat()}

@app.post("/api/auth/login")
def login(payload: LoginRequest) -> dict:
    # Replace with Argon2/bcrypt verification and a secure httpOnly session cookie.
    if payload.email != DEMO_USER["email"] or payload.password != "learning-studio":
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"user": DEMO_USER, "accessToken": "demo-session-token", "expiresIn": 3600}

@app.get("/api/me")
def me(authorization: str | None = Header(default=None)) -> dict:
    if authorization != "Bearer demo-session-token":
        raise HTTPException(status_code=401, detail="Authentication required")
    return DEMO_USER

@app.get("/api/progress")
def get_progress(authorization: str | None = Header(default=None)) -> dict:
    if authorization != "Bearer demo-session-token":
        raise HTTPException(status_code=401, detail="Authentication required")
    return PROGRESS

@app.patch("/api/progress")
def update_progress(payload: ProgressUpdate, authorization: str | None = Header(default=None)) -> dict:
    if authorization != "Bearer demo-session-token":
        raise HTTPException(status_code=401, detail="Authentication required")
    if payload.status == "COMPLETED":
        PROGRESS["completedLessons"] += 1
        PROGRESS["skillPoints"] += 120
    PROGRESS["courseProgress"] = max(PROGRESS["courseProgress"], payload.percent)
    return {"lessonId": payload.lessonId, "saved": True, "progress": PROGRESS}

@app.post("/api/mentor")
def mentor(payload: MentorRequest, authorization: str | None = Header(default=None)) -> dict:
    if authorization != "Bearer demo-session-token":
        raise HTTPException(status_code=401, detail="Authentication required")
    return {
        "answer": "Use the driving-test analogy: train on practice examples, tune decisions on validation data, and keep the test set as one untouched final exam.",
        "citations": [{"lessonId": payload.lessonId, "label": "Train, validation & test sets", "section": "The short version"}],
        "grounded": True,
    }


class NotesRequest(BaseModel):
    lessonId: str
    content: str = Field(min_length=1, max_length=12000)
    tags: list[str] = Field(default_factory=list)

@app.get("/api/live-updates")
def live_updates() -> dict:
    """Return course-owned updates with a server timestamp, not fabricated external news."""
    return {
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "Code Origin.AI course operations",
        "items": [
            {"id": "topic-1", "label": "SYSTEM UPDATE", "title": "RAG evaluation lab refreshed", "detail": "New faithfulness and context-relevance checks are available in the laboratory.", "tone": "cyan"},
            {"id": "topic-2", "label": "NEW LESSON", "title": "Embeddings are now interactive", "detail": "Compare semantic distance with live vector points and metadata filters.", "tone": "gold"},
            {"id": "topic-3", "label": "MENTOR NOTE", "title": "Try the failure mode first", "detail": "Break one assumption and inspect the trace to understand the system.", "tone": "violet"},
        ],
    }

@app.post("/api/notes/analyze")
def analyze_notes(payload: NotesRequest, authorization: str | None = Header(default=None)) -> dict:
    if authorization != "Bearer demo-session-token":
        raise HTTPException(status_code=401, detail="Authentication required")
    words = {word.strip(".,!?():").lower() for word in payload.content.split()}
    matched = [term for term in ["training", "validation", "test", "leakage", "embedding", "retrieval", "model", "data"] if term in words]
    focus = matched[:4] or ["core concept"]
    return {
        "lessonId": payload.lessonId,
        "analyzedAt": datetime.now(timezone.utc).isoformat(),
        "summary": f"Your note is centred on {', '.join(focus)}. Keep one concrete example and one failure mode beside this idea.",
        "concepts": focus,
        "nextAction": "Run the visual simulator, then answer the lesson quiz without looking at your note.",
        "confidence": min(0.96, 0.58 + len(matched) * 0.08),
        "grounded": True,
    }
