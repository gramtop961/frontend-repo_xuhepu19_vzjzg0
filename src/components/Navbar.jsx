import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-block h-8 w-8 rounded bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">Nebula Salon</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-white/80 hover:text-white transition">Services</a>
            <a href="#blog" className="text-sm text-white/80 hover:text-white transition">Blog</a>
            <button onClick={onOpenAuth} className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition">
              <LogIn size={16} />
              Sign in
            </button>
            <a href="#booking" className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black shadow hover:opacity-90 transition" aria-label="Book now">
              Book now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-white/90">Services</a>
              <a href="#blog" className="text-white/90">Blog</a>
              <button onClick={() => { onOpenAuth(); setOpen(false); }} className="text-left text-white/90">Sign in</button>
              <a href="#booking" className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black shadow w-fit">Book now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
