import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 md:pt-32 bg-white overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft white veil to keep white-on-black aesthetic readable */}
        <div className="pointer-events-none absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto w-full md:w-5/6 lg:w-4/6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-black"
          >
            AI that runs your front desk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="mt-4 text-black/70 leading-relaxed max-w-2xl mx-auto"
          >
            Smart scheduling, insurance capture, reminders, and analytics — built for modern dental clinics. Elegant, compliant, and measurable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: 'easeOut' }}
            className="mt-7 flex items-center justify-center gap-3"
          >
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-black bg-black text-white font-semibold px-6 py-3 hover:opacity-90 transition"
            >
              Book Call Now
            </a>
          </motion.div>

          {/* Premium video card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.26, duration: 0.6, ease: 'easeOut' }}
            className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white"
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=Nw478YoO3og"
                title="Velodent AI Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Minimal stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto"
          >
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
          </motion.div>
        </div>
      </div>

      {/* subtle neutral overlays that won't block Spline */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-8 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>
    </section>
  );
}
