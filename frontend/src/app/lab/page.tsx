import React from 'react';

export default function LabPage() {
  return (
    <main className="bg-white max-w-5xl mx-auto px-8 py-32 min-h-[70vh]">
      <div className="mb-24">
        <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-4">// Open Registries</div>
        <h2 className="text-4xl font-light tracking-tight text-black">Active Technical Directives</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 bg-white">
        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 01 // INTUITION ENGINE</div>
          <h3 className="text-xl font-light text-black">Cognitive Pedagogy (Intuition.com)</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Developing open-weights multi-agent ecosystems to facilitate complete, lecturer-free academic mastery. Removing geographic and economic pricing walls ensures underprivileged students can securely prepare for top-tier computational evaluations (IIT-JEE, SAT, AP Calculus) autonomously[cite: 73, 81].
          </p>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 02 // LAB MATRIX</div>
          <h3 className="text-xl font-light text-black">Autonomous Scientific R&D</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Engineering highly targeted pipeline architectures constructed to parse, contextualize, and logically extrapolate from millions of active peer-reviewed research publications simultaneously, advancing chemical and physical discoveries without human throughput caps[cite: 74, 82].
          </p>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 03 // ALIGNMENT ENGINE</div>
          <h3 className="text-xl font-light text-black">Hermeneutical Path Mapping</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Building structurally pure, text-aware scriptural reasoning models that cross-reference historical data matrices. This system works to ensure that as civilizational technological capabilities surge exponentially, our progression remains safely anchored within God's path[cite: 75, 84].
          </p>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 04 // ECO COMPUTE</div>
          <h3 className="text-xl font-light text-black">Planetary Protection Layer</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Deploying deep multi-modal sensor arrays connected directly to cloud telemetry networks to keep careful watch over climate anomalies, track endangered wild ecosystems, and execute software protections to shield biological entities globally[cite: 76, 83].
          </p>
        </div>
      </div>
    </main>
  );
}