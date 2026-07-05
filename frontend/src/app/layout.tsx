import React from 'react';
import '@/app/globals.css';

export const metadata = {
  title: 'Strange Works Laboratory',
  description: 'Algorithmic pipelines for civilizational preservation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-950 selection:text-white">
        
        {/* Navigation Menu */}
        <nav className="border-b border-zinc-100 px-8 py-6 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <a href="/" className="tracking-tight text-base font-normal text-black flex items-center gap-1 hover:opacity-80 transition-opacity">
            Strange Works<span className="text-zinc-300 font-light text-xs">®</span>
          </a>
          <div className="flex gap-10 text-sm font-normal text-zinc-400">
            <a href="/lab" className="hover:text-black transition-colors duration-300 ease-in-out">Lab</a>
            <a href="/news" className="hover:text-black transition-colors duration-300 ease-in-out">News</a>
            <a href="/join-us" className="hover:text-black transition-colors duration-300 ease-in-out">Join Us</a>
          </div>
        </nav>

        {/* Dynamic Pages */}
        {children}

        {/* Institutional Footer */}
        <footer className="border-t border-zinc-100 bg-white px-8 py-10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-light">
          <div>© 2026 Strange Works Laboratory. All Rights Open-Sourced.</div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-[10px] tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>PIPELINE ENGINE STATUS: OPERATIONAL</span>
          </div>
        </footer>

      </body>
    </html>
  );
}