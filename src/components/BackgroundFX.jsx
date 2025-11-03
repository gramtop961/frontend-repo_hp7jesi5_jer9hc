import React from 'react';

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-[1] overflow-hidden">
      {/* Gradient layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(900px_600px_at_90%_30%,rgba(59,130,246,0.20),transparent),radial-gradient(800px_500px_at_50%_120%,rgba(236,72,153,0.12),transparent)]" />

      {/* Soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-pink-500/10 blur-3xl" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
        backgroundSize: '60px 60px',
      }} />
    </div>
  );
}
