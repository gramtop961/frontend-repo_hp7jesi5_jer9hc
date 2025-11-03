import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 md:pt-32 bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">AI services for dental clinics</h1>
          <p className="mt-4 text-black/70 leading-relaxed max-w-xl">
            Velodent automates front-desk operations with an AI receptionist, smart scheduling, insurance capture, reminders, and analytics — so your team focuses on care.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#services" className="inline-flex items-center rounded-full border border-black bg-black text-white font-semibold px-6 py-3 hover:opacity-90 transition">Explore services</a>
            <a href="#faq" className="inline-flex items-center rounded-full border border-black/20 bg-white text-black px-6 py-3 hover:border-black transition">Learn more</a>
          </div>
        </div>
        <div className="order-1 md:order-2 aspect-[16/12] rounded-3xl border border-black/10 overflow-hidden bg-white/50" />
      </div>
    </section>
  );
}
