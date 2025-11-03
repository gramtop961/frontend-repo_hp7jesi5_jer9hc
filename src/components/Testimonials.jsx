import { motion } from 'framer-motion';

const quotes = [
  {
    quote:
      'Velodent integrated seamlessly with our practice systems. Our team saves hours every day and patients notice the difference.',
    author: 'Practice Manager, 6‑chair clinic',
  },
  {
    quote:
      'Scheduling gaps used to be a weekly issue. The AI-driven reminders and rebooking have made a measurable impact.',
    author: 'Operations Director, multi‑location DSO',
  },
  {
    quote:
      'Compliance and privacy were our top priorities. Velodent met our standards while improving efficiency across the board.',
    author: 'Clinical Compliance Lead',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Testimonials</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            >
              <p className="text-sm leading-relaxed">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-black/60">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
