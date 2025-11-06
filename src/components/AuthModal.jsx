import { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ open, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0d14] p-6 text-white shadow-2xl">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 text-white/70 hover:text-white">
          <X />
        </button>
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold tracking-tight">{isSignUp ? 'Create account' : 'Welcome back'}</h3>
          <p className="mt-1 text-white/60">{isSignUp ? 'Join our community to manage bookings and more.' : 'Sign in to manage your bookings.'}</p>
        </div>
        <form className="space-y-4">
          {isSignUp && (
            <div>
              <label className="mb-1 block text-sm text-white/70">Full name</label>
              <input type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Alex Nova" />
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm text-white/70">Email</label>
            <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Password</label>
            <input type="password" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="••••••••" />
          </div>
          <button type="button" className="mt-2 w-full rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2.5 font-semibold text-black shadow hover:opacity-90 transition">
            {isSignUp ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/70">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button className="text-cyan-300 hover:text-cyan-200" onClick={() => setIsSignUp(v => !v)}>
            {isSignUp ? 'Sign in' : 'Create one'}
          </button>
        </p>
      </div>
    </div>
  );
}
