import React, { useState } from 'react';

function SectionTitle({ eyebrow, title, id }) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-widest text-black/50">{eyebrow}</div>
      <h3 id={id} className="text-2xl md:text-3xl font-extrabold text-black">{title}</h3>
    </div>
  );
}

export default function Insights() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: 'How quickly can we get live?',
      a: 'Most clinics launch within 10–14 days. We connect to your phone/chat, calendar, and EHR; then we train the AI on your policies and tone of voice.'
    },
    {
      q: 'Is patient data secure and compliant?',
      a: 'Yes. We follow strict security practices and can align with HIPAA requirements. Data is encrypted in transit and at rest.'
    },
    {
      q: 'Will this replace my staff?',
      a: 'No. It augments your team by handling repetitive tasks so your staff can focus on high-value patient care and in-person experience.'
    },
    {
      q: 'What results should we expect?',
      a: 'Clinics typically see higher conversion from inquiries to bookings, faster response times, fewer no‑shows, and better reactivation of inactive patients.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 space-y-16">
        {/* Philosophy */}
        <div id="philosophy" className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <SectionTitle eyebrow="Our philosophy" title="Automation with a human standard" />
            <p className="text-black/80 leading-relaxed">
              Technology should feel invisible. We build systems that are accurate, empathetic, and measurable. Every workflow is instrumented to show impact on patient experience and business outcomes.
            </p>
            <ul className="mt-6 space-y-3 text-black/80">
              <li>• Patient-first communication, always</li>
              <li>• Measurable ROI with clear dashboards</li>
              <li>• Ownership and support beyond launch</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="text-sm font-semibold text-black/50">Sample Metrics</div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { k: 'Conversion', v: '+28%' },
                { k: 'Response time', v: '-83%' },
                { k: 'No‑shows', v: '-19%' }
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-black/10 p-4 text-center">
                  <div className="text-2xl font-extrabold text-black">{m.v}</div>
                  <div className="text-xs uppercase tracking-wider text-black/50 mt-1">{m.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div id="case-studies" className="grid gap-8 md:grid-cols-2 items-stretch">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <SectionTitle eyebrow="Case study" title="Reviving missed calls into booked appointments" />
            <p className="text-black/80 leading-relaxed">
              A 3-location practice struggled with after-hours inquiries. We deployed an AI receptionist and smart scheduling with callback routing. Within 6 weeks, booked appointments from missed calls increased by 34%.
            </p>
            <ul className="mt-6 space-y-2 text-black/80">
              <li>• 34% more bookings from missed calls</li>
              <li>• 2.1x faster first-response time</li>
              <li>• 15% lift in patient satisfaction (NPS)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 bg-white flex items-center justify-center">
            <div className="w-full h-64 rounded-xl border border-black/10 bg-[radial-gradient(120px_60px_at_20%_30%,rgba(0,0,0,0.08),transparent),radial-gradient(140px_80px_at_80%_70%,rgba(0,0,0,0.06),transparent)] flex items-center justify-center">
              <span className="text-black/60">Dashboard preview coming soon</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="Client FAQ" title="Answers to common questions" />
          <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden bg-white">
            {faqs.map((f, i) => (
              <div key={i} className="p-5">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left flex items-center justify-between">
                  <span className="font-semibold text-black">{f.q}</span>
                  <span className="text-black">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <p className="mt-3 text-black/75 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
