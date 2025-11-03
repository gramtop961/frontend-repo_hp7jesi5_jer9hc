import React from 'react';
import Navbar from './components/Navbar';
import BackgroundFX from './components/BackgroundFX';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import DashboardPreview from './components/DashboardPreview';

function Divider() {
  return (
    <div className="pointer-events-none relative h-px w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-4"><Divider /></div>
        <BookingSection />
        <div className="mx-auto max-w-7xl px-4"><Divider /></div>
        <DashboardPreview />
      </main>

      <footer id="contact" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-semibold">Ready to build something extraordinary?</div>
              <p className="text-white/70">Let’s craft an elegant, enterprise-grade experience together.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://cal.com/velodent-ogbkfv/20min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.99] transition-transform"
              >
                Book Now
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} VeloDent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
