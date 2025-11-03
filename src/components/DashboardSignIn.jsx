import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

export default function DashboardSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Demo only: Sign-in not connected yet.');
  };

  return (
    <section className="min-h-[92vh] pt-28 md:pt-32 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white/80 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-bold text-center text-black">Dashboard Portal</h2>
        <p className="mt-2 text-center text-black/60">Sign in to access your clinic dashboard.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">Email</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@clinic.com"
                className="w-full rounded-xl border border-black/10 bg-white/70 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-black/10 bg-white/70 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full border border-black bg-black text-white font-semibold px-6 py-3 hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-black/50">By continuing, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
