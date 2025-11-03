import React, { useEffect, useRef } from 'react';

export default function BookingSection() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const ensureInit = () => {
      try {
        if (window.Cal) {
          window.Cal("init", "20min", { origin: "https://app.cal.com" });
          window.Cal.ns["20min"]("inline", {
            elementOrSelector: "#my-cal-inline-20min",
            config: { layout: "month_view" },
            calLink: "velodent-ogbkfv/20min",
          });
          window.Cal.ns["20min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
          initializedRef.current = true;
        }
      } catch (e) {
        // silently ignore
      }
    };

    if (!window.Cal) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://app.cal.com/embed/embed.js';
      s.async = true;
      s.onload = ensureInit;
      document.head.appendChild(s);
    } else {
      ensureInit();
    }
  }, []);

  return (
    <section id="booking" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Book a Call</h2>
          <p className="mt-2 text-white/70">Choose a time that works for you. The calendar below updates in real-time.</p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_50px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* glassmorphism glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div style={{ width: '100%', height: '100%' }} id="my-cal-inline-20min" className="min-h-[700px] overflow-auto" />
        </div>
      </div>
    </section>
  );
}
