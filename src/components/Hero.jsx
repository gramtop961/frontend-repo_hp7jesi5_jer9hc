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
        <div className="mx-auto w-full md:w-5/6 lg:w-4/6">
          {/* Responsive video container */}
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-white/70 backdrop-blur-xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">AI that runs your front desk</h1>
            <p className="mt-3 text-black/70 leading-relaxed max-w-2xl mx-auto">
              Smart scheduling, insurance capture, reminders, and analytics — built for modern dental clinics. Elegant, compliant, and measurable.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://cal.com/velodent-ogbkfv/20min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-black bg-black text-white font-semibold px-6 py-3 hover:opacity-90 transition"
              >
                Schedule a Call
              </a>
              <a href="#booking" className="inline-flex items-center rounded-full border border-black/20 bg-white text-black px-6 py-3 hover:border-black transition">
                See Availability
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle gradients that never block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-8 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}
