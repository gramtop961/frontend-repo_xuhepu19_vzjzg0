import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import BlogPreview from './components/BlogPreview';
import AuthModal from './components/AuthModal';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Nebula Salon. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main className="pt-16">
        <Hero3D />
        <Services />
        <BlogPreview />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
