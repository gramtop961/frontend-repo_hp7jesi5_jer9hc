import React from 'react';

const steps = [
  {
    title: 'AI Receptionist',
    desc: '24/7 call + chat assistant that greets patients, answers questions, captures intent, and routes to the right workflow.'
  },
  {
    title: 'Smart Scheduling',
    desc: 'Automated appointment booking, rescheduling, and confirmations synced with your practice calendar.'
  },
  {
    title: 'Insurance & Intake',
    desc: 'Collects patient details, verifies insurance, and pre-fills forms to reduce front-desk workload.'
  },
  {
    title: 'Reminders & Follow-ups',
    desc: 'SMS/email reminders, post-visit care instructions, reviews, and reactivation campaigns.'
  },
  {
    title: 'Analytics & Insights',
    desc: 'Real-time dashboard with conversion, response time, utilization, and revenue impact metrics.'
  }
];

export default function ServicesProcess() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black text-center">Services & Process</h2>
        <p className="mt-3 text-center text-black/70 max-w-2xl mx-auto">
          End-to-end AI automation tailored for dental clinics. Simple to adopt, measurable in weeks.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="text-sm font-semibold text-black/50">Step {i + 1}</div>
              <h3 className="mt-2 text-xl font-bold text-black">{s.title}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{s.desc}</p>
              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
