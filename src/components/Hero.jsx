import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 md:pt-32 bg-white">
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

          {/* Video hero */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=dQw4w9WgXcQ"
                title="Velodent AI Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
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

      {/* subtle neutral overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-8 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>
    </section>
  );
}
