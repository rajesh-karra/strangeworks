#!/bin/bash
# Blueprint for a Strange Works Clone (Next.js + FastAPI + PostgreSQL)

echo "🚀 Launching Strange Works Project Scaffolding..."

# 1. CREATE BACKEND (FastAPI)
mkdir -p backend/app
cat << 'EOF' > backend/requirements.txt
fastapi==0.111.0
uvicorn==0.30.1
pydantic==2.7.4
google-generativeai==0.7.2
psycopg2-binary==2.9.9
pgvector==0.2.5
python-dotenv==1.0.1
EOF

cat << 'EOF' > backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Strange Works AI Core Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure your Google AI Studio Key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

@app.get("/")
def read_root():
    return {"status": "Online", "system": "Strange Works Quantum-AI Pipeline Engine Core"}

@app.post("/api/stream")
async def stream_ai_prompt(prompt: str):
    # Low-latency streaming built for quantum-grade AI platforms
    model = genai.GenerativeModel('gemini-1.5-pro')
    
    def generate():
        response = model.generate_content(prompt, stream=True)
        for chunk in response:
            yield chunk.text

    return StreamingResponse(generate(), media_type="text/plain")
EOF

# 2. CREATE FRONTEND (Next.js with Tailwind Setup)
npx create-next-app@latest frontend --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm < /dev/null

# Create the customized visual interface matching strangeworks.ai
cat << 'EOF' > frontend/src/app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#fafafa] selection:bg-[#ff3366] selection:text-white font-sans antialiased">
      {/* Premium Strange Works Tech Navbar */}
      <nav className="border-b border-[#1c1c1f] px-8 py-4 flex justify-between items-center backdrop-blur-md bg-[#030303]/80 sticky top-0 z-50">
        <div className="font-mono tracking-tighter text-base font-black uppercase">
          STRANGE <span className="text-[#ff3366]">WORKS</span>
        </div>
        <div className="flex gap-6 text-xs font-mono text-zinc-500">
          <a href="#environment" className="hover:text-white transition-colors">/env</a>
          <a href="#education" className="hover:text-white transition-colors">/edu</a>
          <a href="#biblical" className="hover:text-white transition-colors">/path</a>
        </div>
      </nav>

      {/* Strange Works Aesthetic Hero Core */}
      <section className="max-w-4xl mx-auto pt-32 px-6 text-center md:text-left">
        <p className="text-xs font-mono text-[#ff3366] tracking-widest uppercase mb-4">[ Compute Engine Initiated ]</p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-none">
          Making AI <br />
          <span className="text-zinc-500">Completely Accessible.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl font-normal leading-relaxed mb-8">
          Strange Works is a next-generation deployment tier designed to humanize deep tier computing. We build systems to heal ecological barriers, streamline planetary educational access, and map biblical philosophy to our post-modern paradigm.
        </p>
        <div className="flex gap-4 font-mono text-xs">
          <button className="bg-[#ff3366] text-white px-6 py-3 font-bold hover:bg-[#e02454] transition-all tracking-wider">
            GET STARTED FREE
          </button>
          <button className="border border-zinc-800 text-zinc-400 px-6 py-3 hover:bg-zinc-900 transition-all">
            VIEW CONSOLE
          </button>
        </div>
      </section>

      {/* Strategic Integration Grid Blocks */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8 border-t border-[#1c1c1f] mt-24">
        <div className="border border-[#1c1c1f] p-8 bg-[#0a0a0c] hover:border-zinc-700 transition-colors">
          <span className="font-mono text-xs text-[#ff3366] block mb-2">STRANGE_CORE_01</span>
          <h3 className="text-xl font-bold text-white mb-2">Ecological Safeguards</h3>
          <p className="text-zinc-400 text-sm font-normal leading-relaxed">Scaling intelligent systems to actively mitigate human environmental errors and protect our planetary balance.</p>
        </div>
        <div className="border border-[#1c1c1f] p-8 bg-[#0a0a0c] hover:border-zinc-700 transition-colors">
          <span className="font-mono text-xs text-[#ff3366] block mb-2">STRANGE_CORE_02</span>
          <h3 className="text-xl font-bold text-white mb-2">Cognitive Pedagogy</h3>
          <p className="text-zinc-400 text-sm font-normal leading-relaxed">Democratizing education globally through contextual micro-agents engineered to meet individuals precisely where they learn.</p>
        </div>
        <div className="border border-[#1c1c1f] p-8 bg-[#0a0a0c] hover:border-zinc-700 transition-colors">
          <span className="font-mono text-xs text-[#ff3366] block mb-2">STRANGE_CORE_03</span>
          <h3 className="text-xl font-bold text-white mb-2">Biblical Navigation</h3>
          <p className="text-zinc-400 text-sm font-normal leading-relaxed">Providing computationally structured theological tracking models to illuminate traditional biblical foundations for modern mankind.</p>
        </div>
      </section>
    </main>
  );
}
EOF

# 3. CORE INFRASTRUCTURE CONFIGURATION (Docker Compose for Database)
cat << 'EOF' > docker-compose.yml
version: '3.8'
services:
  db:
    image: ankane/pgvector:latest
    environment:
      POSTGRES_USER: strange_admin
      POSTGRES_PASSWORD: strangepassword
      POSTGRES_DB: strangeworks_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
EOF

# 4. VARIABLE PROFILE ENGINES
cat << 'EOF' > backend/.env
GOOGLE_API_KEY=your_actual_google_ai_studio_api_key_here
DATABASE_URL=postgresql://strange_admin:strangepassword@db:5432/strangeworks_db
EOF

echo "✅ Strange Works Platform Framework Built and Scaffolded!"
echo "👉 To activate your localized stack, follow the next steps."