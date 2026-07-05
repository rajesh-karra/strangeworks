import React from 'react';

export default function HomePage() {
  return (
    <article className="bg-white">
      {/* Refined Minimalist Hero Space */}
      <section className="max-w-5xl mx-auto pt-36 pb-28 px-8 bg-white">
        <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-6">// Core Operations</div>
        <h1 className="text-5xl md:text-[76px] font-light tracking-tight text-black mb-12 leading-[1.08]">
          Algorithmic pipelines <br />
          <span className="text-zinc-400">for civilizational preservation.</span>
        </h1>
        
        <p className="text-zinc-600 text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-14">
          Strange Works functions as an independent tier dedicated to open-source foundation intelligence. By processing advanced large language models through thermodynamic and quantum execution layers, we seek to safeguard fragile biospheres, democratize elite foundational coaching globally, and anchor technical progress to uncorrupted scriptural paths[cite: 79, 80].
        </p>

        <div className="flex items-center gap-8 text-sm font-normal">
          <a href="/lab" className="bg-black text-white px-7 py-3.5 hover:bg-zinc-800 transition-all duration-300">
            Open Lab Index
          </a>
          <a href="/join-us" className="text-zinc-500 hover:text-black transition-colors duration-300 flex items-center gap-2 group">
            Apply to the Initiative <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Strategic Vision Manifesto — Pure Background */}
      <section className="border-t border-zinc-100 max-w-5xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-12 bg-white">
        <div className="md:col-span-4 text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase">// Orientation</div>
        <div className="md:col-span-8 space-y-8 bg-white">
          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Our Motto</h3>
            <p className="text-xl font-light text-zinc-800 leading-relaxed">
              Decoding physical laws, aligning computational progress, and protecting the baseline inheritance of mankind[cite: 69].
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">The Vision</h3>
            <p className="text-zinc-600 font-light leading-relaxed">
              To achieve a state of computational harmony where deep tier technology acts as a direct catalyst for human alignment, cognitive democratization, and planetary stewardship[cite: 79]. We envision a world where advanced baseline knowledge is seamlessly accessible, scientific discovery is unbound by human bandwidth constraints, and temporal existence remains securely grounded in absolute biblical truth[cite: 80].
            </p>
          </div>
        </div>
      </section>

      {/* Audio Observation Asset — Completely Frameless Layout */}
      <section className="border-t border-zinc-100 bg-white py-28 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16 items-start bg-white">
          <div className="md:col-span-5 space-y-6 bg-white">
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">// System Audio-Data Log</div>
            <h2 className="text-2xl font-light tracking-tight text-black leading-snug">The Exception of Primitive Comprehension</h2>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
              We are merely a highly developed species of primates inhabiting a small world near a common star. Yet, our comprehension of the Universe distinguishes us significantly[cite: 70]. Even though we exist as a simple "aggregation of basic elements" within a cosmic expanse, our capacity to decode physical laws is truly exceptional[cite: 69].
            </p>
            <div className="text-xs text-zinc-400 font-medium tracking-tight border-l border-zinc-200 pl-3">
              — Professor Stephen Hawking, Core Cosmological Framework [cite: 71]
            </div>
          </div>

          <div className="md:col-span-7 bg-white border border-zinc-100 p-1">
            <div className="px-4 py-2 border-b border-zinc-100 flex items-center justify-between bg-white">
              <span className="font-mono text-[10px] text-zinc-400">archive_stream // stephen_hawking_voice.mp4</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
            </div>
            <video controls className="w-full h-auto aspect-video object-cover bg-zinc-950">
              <source src="/stephen_hawking_voice.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </article>
  );
}