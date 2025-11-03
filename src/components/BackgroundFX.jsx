import React from 'react';

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-[1] overflow-hidden">
      {/* Neutral radial gradients for elegant minimalism */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(0,0,0,0.06),transparent),radial-gradient(900px_600px_at_90%_30%,rgba(0,0,0,0.05),transparent),radial-gradient(800px_500px_at_50%_120%,rgba(0,0,0,0.04),transparent)]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
