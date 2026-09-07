# API boundary

Run the local API with Python 3.11+:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The demo endpoint uses the intentionally documented learner `arjun.rao@example.com` with password `learning-studio`. Replace the in-memory repository and demo token before production: use Argon2/bcrypt password verification, secure httpOnly sessions, PostgreSQL/Prisma persistence, Redis queues, and a server-side model provider integration.

Available endpoints:

- `GET /health`
- `POST /api/auth/login`
- `GET /api/me`
- `GET /api/progress`
- `PATCH /api/progress`
- `POST /api/mentor`
