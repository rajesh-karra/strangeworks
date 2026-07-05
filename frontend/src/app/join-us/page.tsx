import React from 'react';

export default function JoinUsPage() {
  return (
    <main className="bg-white max-w-5xl mx-auto px-8 py-32 min-h-[70vh] grid md:grid-cols-12 gap-16">
      
      {/* Left Column: Vision Matching Overview */}
      <div className="md:col-span-5 space-y-6 bg-white">
        <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase">// Fellowship Parameters</div>
        <h2 className="text-3xl font-light tracking-tight text-black">Align with the Core</h2>
        
        <div className="text-zinc-600 text-sm space-y-6 font-light leading-relaxed">
          <p>
            Strange Works is explicitly structured around civilizational continuity tiers. We choose to operate exclusively on systems designed to protect the baseline inheritance of mankind.
          </p>
          <div>
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Our Core Mission</h4>
            <p className="text-zinc-500 border-l border-zinc-200 pl-4 italic">
              "To achieve a state of computational harmony where deep tier technology acts as a direct catalyst for human alignment, cognitive democratization, and planetary stewardship[cite: 79]."
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Clean Architecture Intake Panel */}
      <div className="md:col-span-7 bg-white border-t md:border-t-0 md:border-l border-zinc-100 pt-12 md:pt-0 md:pl-12">
        <form className="space-y-8 bg-white">
          <div className="space-y-2">
            <label className="block font-mono text-[11px] uppercase text-zinc-400">Identity Context / Name</label>
            <input type="text" className="w-full bg-white border-b border-zinc-200 py-2 focus:outline-none focus:border-black text-sm font-light transition-colors rounded-none shadow-none" placeholder="e.g., John Doe" />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-[11px] uppercase text-zinc-400">Communication Coordinate / Email</label>
            <input type="email" className="w-full bg-white border-b border-zinc-200 py-2 focus:outline-none focus:border-black text-sm font-light transition-colors rounded-none shadow-none" placeholder="name@domain.com" />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-[11px] uppercase text-zinc-400">Research Focus Area Alignment</label>
            <select className="w-full bg-white border-b border-zinc-200 py-2 focus:outline-none focus:border-black text-sm font-light text-zinc-500 transition-colors rounded-none appearance-none">
              <option>Track 01 // Cognitive Pedagogy (Intuition.com)</option>
              <option>Track 02 // Autonomous R&D Systems</option>
              <option>Track 03 // Theological Mapping Alignment</option>
              <option>Track 04 // Ecological Defense Frameworks</option>
            </select>
          </div>

          <button type="submit" className="bg-black text-white text-xs font-normal tracking-widest px-6 py-3.5 hover:bg-zinc-800 transition-colors uppercase rounded-none">
            Submit Matrix Data
          </button>
        </form>
      </div>

    </main>
  );
}