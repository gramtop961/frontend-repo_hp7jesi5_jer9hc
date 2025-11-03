import React from 'react';

const SectionTitle = ({ id, eyebrow, title, subtitle }) => (
  <div className="mb-8 text-center">
    {eyebrow && <div className="text-xs uppercase tracking-widest text-black/50">{eyebrow}</div>}
    <h2 id={id} className="text-2xl md:text-4xl font-extrabold tracking-tight text-black">{title}</h2>
    {subtitle && <p className="mt-2 text-black/70 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Integrations = () => {
  const logos = [
    'Open Dental','Dentrix','Eaglesoft','Carestream','Curve Dental','NexHealth','Modento','Weave','Solutionreach','Yapi','Simplifeye','OnPay','Athena','Kareo','Phreesia','Rectangle','Zocdoc','Epic','Cerner','Doctible'
  ];
  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-black/10 bg-white p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center h-14 rounded-xl border border-black/10 bg-white">
              <span className="text-sm font-semibold tracking-wide text-black/70">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-black/50">Monochrome brand treatment to match the minimalist theme.</p>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    'AI Receptionist','Smart Scheduling','Two‑way SMS','Insurance Capture','Digital Intake','EHR Sync','After‑hours Triage','Recall & Reactivation','Reminders','Broadcasts','Queue Management','Call Summaries','Lead Scoring','Review Requests','Referral Tracking','Payments & Plans','Waitlist Automation','No‑show Recovery','Pre‑Auth Assistant','Eligibility Checks','Knowledge Base','Voice Biometrics','Role‑based Access','Audit Logs'
  ];
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {services.map((s, i) => (
        <div key={i} className="group relative rounded-2xl border border-black/10 bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition-shadow">
          <div className="text-sm font-medium text-black">{s}</div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-black/15" />
        </div>
      ))}
    </div>
  );
};

const HorizontalVideos = ({ items }) => (
  <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
    <div className="flex gap-4 min-w-max">
      {items.map((v, i) => (
        <div key={i} className="shrink-0 w-[320px] md:w-[420px] rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <div className="text-sm font-semibold text-black line-clamp-2">{v.title}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Showcase() {
  const caseStudyVideos = [
    { id: '1xNmZ4c1lUs', title: 'Case Study: Missed calls to bookings' },
    { id: 'tAGnKpE4NCI', title: 'Case Study: Automating intake' },
    { id: 'fLexgOxsZu0', title: 'Case Study: No‑show reduction' }
  ];
  const testimonialVideos = [
    { id: 'M7lc1UVf-VE', title: 'Client testimonial: 3‑location practice' },
    { id: 'ysz5S6PUM-U', title: 'Client testimonial: Startup clinic' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Services */}
        <SectionTitle id="services" eyebrow="What we deliver" title="The Velodent Service Suite" subtitle="24 services across communication, scheduling, data capture, and analytics." />
        <ServicesGrid />
        <Integrations />

        {/* Case Studies */}
        <div className="mt-20">
          <SectionTitle id="case-studies" eyebrow="Proven outcomes" title="Case Studies" subtitle="Short, horizontal stories you can skim." />
          <HorizontalVideos items={caseStudyVideos} />
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <SectionTitle id="testimonials" eyebrow="What clients say" title="Testimonials (video)" subtitle="Real results, real teams." />
          <HorizontalVideos items={testimonialVideos} />
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <SectionTitle id="faq" eyebrow="Client FAQ" title="Answers to common questions" />
          <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden bg-white">
            {[
              { q: 'How quickly can we get live?', a: 'Most clinics launch within 10–14 days after connecting your systems and calibrating tone/policies.' },
              { q: 'Do you integrate with our CRM/EHR?', a: 'Yes. We support major dental platforms and can add custom connectors on request.' },
              { q: 'Is data secure?', a: 'Yes. Encryption in transit and at rest, role-based access, and detailed audit logs.' },
            ].map((f, i) => (
              <details key={i} className="group p-5 open:pb-6">
                <summary className="cursor-pointer list-none flex items-center justify-between text-black font-semibold">
                  <span>{f.q}</span>
                  <span className="text-black/70 group-open:hidden">+</span>
                  <span className="text-black/70 hidden group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-black/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
