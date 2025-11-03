import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesProcess from './components/ServicesProcess';
import Insights from './components/Insights';

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesProcess />
        <Insights />
        <section id="dashboard" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="rounded-2xl border border-black/10 p-8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <h2 className="text-2xl md:text-3xl font-extrabold">Dashboard portal</h2>
              <p className="mt-2 text-black/70 max-w-2xl">A unified view of inquiries, bookings, and outcomes. Track conversion, response times, utilization, and campaign performance in real-time.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {['Inquiries → Bookings','Response time','Revenue impact'].map((k,i)=> (
                  <div key={i} className="rounded-xl border border-black/10 p-5">
                    <div className="text-sm uppercase tracking-wider text-black/50">Metric</div>
                    <div className="mt-2 text-2xl font-extrabold">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
