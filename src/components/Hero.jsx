import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[110vh] pt-28 md:pt-32">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to blend with content */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center text-center gap-6">
        <h1 className="mt-8 text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 drop-shadow-sm">
          Premium Fintech Experiences, Built for Scale
        </h1>
        <p className="max-w-2xl text-white/80 leading-relaxed">
          We design, build, and optimize enterprise-grade product interfaces with beautiful motion, performance, and measurable impact.
        </p>

        {/* Responsive YouTube embed */}
        <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-white/80 max-w-xl">
          From strategy and design to production systems — we ship polished, modern, and immersive digital experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.99] transition-transform"
          >
            Schedule a Call
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 hover:text-white px-6 py-3 hover:bg-white/10 transition"
          >
            Book Inline
          </a>
        </div>
      </div>
    </section>
  );
}
