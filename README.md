# Next.js + FastAPI Monorepo

A modern full-stack application with Next.js frontend and FastAPI backend.

## Architecture

```
/                   # Project root
├─ src/             # Next.js frontend
│  └─ app/          # App Router components
├─ backend/         # FastAPI backend
│  ├─ .venv/        # Python virtual environment
│  ├─ main.py       # FastAPI application
│  └─ requirements.txt
├─ next.config.ts   # Next.js config with API proxy
└─ package.json     # Project dependencies and scripts
```

## Key Features

- **Next.js 15+ with App Router**: Server components for optimal rendering
- **FastAPI Backend**: Modern Python API with async support
- **API Proxy**: Seamless integration via Next.js rewrites
- **PNPM**: Fast, disk-efficient package manager
- **Concurrent Development**: Run both frontend and backend with a single command

## Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run the development server**:

   ```bash
   pnpm run dev
   ```

3. **Access your application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - API via proxy: [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

## How it Works

The application uses Next.js App Router for the frontend and FastAPI for the backend API. The two are connected via a proxy configuration in `next.config.ts` that forwards all `/api/*` requests from the frontend to the backend server.
