import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white font-sans antialiased">
      
      {/* Authentic Thinking Machines Minimal Navigation Panel */}
      <nav className="border-b border-zinc-100 px-8 py-6 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="tracking-tight text-base font-normal text-black flex items-center gap-1">
          Strange Works<span className="text-zinc-300 font-light text-xs">®</span>
        </div>
        <div className="flex gap-10 text-sm font-normal text-zinc-400">
          <a href="#lab" className="hover:text-black transition-colors duration-300 ease-in-out">Lab</a>
          <a href="#news" className="hover:text-black transition-colors duration-300 ease-in-out">News</a>
          <a href="#join-us" className="hover:text-black transition-colors duration-300 ease-in-out">Join Us</a>
        </div>
      </nav>

      {/* Ultra-Clean Restrained Typography Hero Workspace */}
      <section className="max-w-5xl mx-auto pt-36 pb-28 px-8">
        <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-6">
          // Research Laboratory
        </div>
        <h1 className="text-5xl md:text-[76px] font-light tracking-tight text-black mb-12 leading-[1.08]">
          Algorithmic pipelines <br />
          <span className="text-zinc-400">for civilizational preservation.</span>
        </h1>
        
        <p className="text-zinc-600 text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-14">
          Strange Works functions as an independent tier dedicated to open-source foundation intelligence. By processing advanced large language models through thermodynamic and quantum execution layers, we seek to safeguard fragile biospheres, democratize elite foundational coaching globally, and anchor tech progress to uncorrupted scripture paths.
        </p>

        <div className="flex items-center gap-8 text-sm font-normal">
          <a href="#lab" className="bg-black text-white px-7 py-3.5 hover:bg-zinc-800 transition-all duration-300">
            Open Lab Index
          </a>
          <a href="#news" className="text-zinc-500 hover:text-black transition-colors duration-300 flex items-center gap-2 group">
            Read Whitepapers <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Media Ingestion & Cosmological Framework Section */}
      <section className="border-t border-b border-zinc-100 bg-zinc-50/40 py-28 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          
          <div className="md:col-span-5 space-y-6">
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">// System Audio-Data Log</div>
            <h2 className="text-2xl font-light tracking-tight text-black leading-snug">The Exception of Primitive Comprehension</h2>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
              We are merely a highly developed species of primates inhabiting a small world near a common star. Yet, our comprehension of the Universe distinguishes us significantly. Even though we exist as a simple "aggregation of basic elements" within a cosmic expanse, our capacity to decode physical laws is truly exceptional.
            </p>
            <div className="text-xs text-zinc-400 font-medium tracking-tight border-l border-zinc-200 pl-3">
              — Professor Stephen Hawking, Core Cosmological Framework
            </div>
          </div>

          {/* Premium Frameless Media Asset Presenter */}
          <div className="md:col-span-7 bg-white border border-zinc-200/60 p-2 shadow-sm rounded-none">
            <div className="px-4 py-2 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
              <span className="font-mono text-[10px] text-zinc-400">archive_stream // stephen_hawking_voice.mp4</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
            </div>
            <video 
              controls 
              className="w-full h-auto aspect-video object-cover bg-black"
            >
              <source src="/stephen_hawking_voice.mp4" type="video/mp4" />
              Ensure stephen_hawking_voice.mp4 is saved in your frontend/public/ folder directory.
            </video>
          </div>

        </div>
      </section>

      {/* Core Research Nodes Grid */}
      <section id="lab" className="max-w-5xl mx-auto px-8 py-32">
        <div className="mb-24">
          <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-4">// System Matrices</div>
          <h2 className="text-3xl font-light tracking-tight text-black">Active Technical Directives</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          
          <div className="border-t border-zinc-200/60 pt-6 space-y-4">
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 01 // INTUITION ENGINE</div>
            <h3 className="text-xl font-light text-black">Cognitive Pedagogy (Intuition.com)</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Developing open-weights multi-agent ecosystems to facilitate complete, lecturer-free academic mastery. Removing geographic and economic pricing walls ensures underprivileged students can securely prepare for top-tier computational evaluations (IIT-JEE, SAT, AP Calculus) autonomously.
            </p>
          </div>

          <div className="border-t border-zinc-200/60 pt-6 space-y-4">
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 02 // LAB MATRIX</div>
            <h3 className="text-xl font-light text-black">Autonomous Scientific R&D</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Engineering highly targeted pipeline architectures constructed to parse, contextualize, and logically extrapolate from millions of active peer-reviewed research publications simultaneously, advancing chemical and physical discoveries without human throughput caps.
            </p>
          </div>

          <div className="border-t border-zinc-200/60 pt-6 space-y-4">
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 03 // ALIGNMENT ENGINE</div>
            <h3 className="text-xl font-light text-black">Hermeneutical Path Mapping</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Building structurally pure, text-aware scriptural reasoning models that cross-reference historical data matrices. This system works to ensure that as civilizational technological capabilities surge exponentially, our progression remains safely anchored within God's path.
            </p>
          </div>

          <div className="border-t border-zinc-200/60 pt-6 space-y-4">
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider">TRACK 04 // ECO COMPUTE</div>
            <h3 className="text-xl font-light text-black">Planetary Protection Layer</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Deploying deep multi-modal sensor arrays connected directly to cloud telemetry networks to keep careful watch over climate anomalies, track endangered wild ecosystems, and execute software protections to shield biological entities globally.
            </p>
          </div>

        </div>
      </section>

      {/* Minimal Quote Banner Section */}
      <section id="news" className="border-t border-zinc-100 max-w-5xl mx-auto px-8 py-28 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-zinc-800 text-xl md:text-2xl font-light font-serif italic leading-relaxed">
            "Implementing things from scratch is one of the most important things I did. Once you know how things are happening under the hood, then you can debug your models & improve things easily."
          </p>
          <div className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase">
            — Andrej Karpathy // Core Engineering Methodology
          </div>
        </div>
      </section>

      {/* Minimal Join Us Terminal Component */}
      <section id="join-us" className="border-t border-zinc-100 bg-zinc-50/20 py-28 px-8 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black">Join the Institute</h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            We consistently look for engineers, technical researchers, and visionaries committed to maintaining transparent, open-weights frameworks for human advancement.
          </p>
          <button className="bg-black text-white text-xs font-normal tracking-widest px-6 py-3.5 hover:bg-zinc-800 transition-colors uppercase">
            Apply to Core Lab
          </button>
        </div>
      </section>

      {/* Academic Institutional Footer Structure */}
      <footer className="border-t border-zinc-100 bg-white px-8 py-10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-light">
        <div>© 2026 Strange Works Laboratory. All Rights Open-Sourced.</div>
        <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-[10px] tracking-tight">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>PIPELINE ENGINE STATUS: OPERATIONAL</span>
        </div>
      </footer>

    </main>
  );
}