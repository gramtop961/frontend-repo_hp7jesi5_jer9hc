import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Automated Intake & Triage',
    result: '38% faster new-patient onboarding',
    detail: 'Validated forms, insurance pre-checks, and smart triage reduce front-desk load.'
  },
  {
    title: 'Scheduling Optimization',
    result: '22% reduction in no‑shows',
    detail: 'Proactive reminders and AI rescheduling fill gaps and keep chairs occupied.'
  },
  {
    title: 'Claims & Billing Assist',
    result: '2.1x faster claims turnaround',
    detail: 'Structured documentation and eligibility checks minimize rework.'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Case Studies</h2>
          <p className="text-sm text-black/60">Real outcomes from real clinics</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl border border-black/10 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_34px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-black/60">{c.detail}</p>
              <div className="mt-6 text-sm">
                <span className="inline-flex rounded-full border border-black px-3 py-1 font-medium">{c.result}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
