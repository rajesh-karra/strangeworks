import React from 'react';

export default function NewsPage() {
  return (
    <main className="bg-white max-w-3xl mx-auto px-8 py-32 min-h-[70vh]">
      <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-4">// Dispatches & Methodology</div>
      <h2 className="text-4xl font-light tracking-tight text-black mb-16">System Log Updates</h2>

      <div className="space-y-20 bg-white">
        <div className="border-b border-zinc-100 pb-12">
          <div className="text-xs font-mono text-zinc-400 mb-2">JULY 2026 // METHODOLOGY PROFILE</div>
          <h3 className="text-xl font-light text-black mb-4">Engineering Frameworks from First Principles</h3>
          <p className="text-zinc-800 text-lg font-light font-serif italic leading-relaxed mb-4">
            "Implementing things from scratch is one of the most important things I did. Once you know how things are happening under the hood, then you can debug your models & improve things easily."
          </p>
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">— Andrej Karpathy [cite: 68]</div>
        </div>
      </div>
    </main>
  );
}