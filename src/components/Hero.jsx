import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] bg-white text-black overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* White veil to keep a strict black & white aesthetic while preserving interaction */}
      <div className="pointer-events-none absolute inset-0 bg-white/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-center"
        >
          Velodent
          <span className="block mt-2 text-xl sm:text-2xl font-normal text-black/70">
            AI automation for dental clinics — accelerate operations, elevate patient experience.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-3xl text-center text-base sm:text-lg text-black/80"
        >
          Streamline intake, scheduling, insurance, and follow‑ups with reliable AI workflows designed for enterprise compliance.
        </motion.p>

        {/* Prominent video center stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          className="mt-10 w-full flex justify-center"
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Nw478YoO3og?autoplay=1&mute=1&loop=1&playlist=Nw478YoO3og&controls=0&modestbranding=1&rel=0&playsinline=1"
              title="Velodent Overview"
              allow="autoplay; encrypted-media; picture-in-picture;" 
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Book Call Now
          </a>
          <span className="text-sm text-black/60">Enterprise-ready. Privacy-first.</span>
        </motion.div>
      </div>
    </section>
  );
}
