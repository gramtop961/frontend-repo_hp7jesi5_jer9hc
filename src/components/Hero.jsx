import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 md:pt-32 bg-white">
      {/* Interactive 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto w-full md:w-5/6 lg:w-4/6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">AI that runs your front desk</h1>
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl mx-auto">
            Smart scheduling, insurance capture, reminders, and analytics — built for modern dental clinics. Elegant, compliant, and measurable.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-black bg-black text-white font-semibold px-6 py-3 hover:opacity-90 transition"
            >
              Book Call Now
            </a>
          </div>

          {/* Minimal stats strip */}
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto">
            {[
              ['Uptime', '99.99%'],
              ['Avg. response', '28s'],
              ['Clinics', '250+'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-black/10 bg-white/80 backdrop-blur-md p-3">
                <div className="text-[11px] uppercase tracking-wide text-black/50">{k}</div>
                <div className="text-sm font-semibold text-black">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* subtle neutral overlays that never block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-8 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>
    </section>
  );
}
