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
