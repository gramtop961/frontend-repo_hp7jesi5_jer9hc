import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import BackgroundFX from './components/BackgroundFX';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Shield, Star } from 'lucide-react';

function App() {
  return (
    <div className="bg-white text-black min-h-screen relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <BookingSection />

        {/* Dashboard Portal (inline section) */}
        <section id="dashboard" className="relative py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-black">Dashboard Portal</h3>
                <p className="mt-2 text-black/70 max-w-2xl">Realtime insights with elegant interactions and rock-solid security. A preview of the enterprise experience.</p>
              </div>
              <div className="hidden md:flex items-center gap-3 text-black/70">
                <Shield className="h-5 w-5" /> Secure
                <BarChart3 className="h-5 w-5" /> Analytics
                <Star className="h-5 w-5" /> UX
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="lg:col-span-3 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-black to-black/70 flex items-center justify-center text-white">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-black font-semibold">Revenue Overview</div>
                      <div className="text-black/60 text-sm">Last 12 months</div>
                    </div>
                  </div>
                  <button className="rounded-full border border-black/20 px-3 py-1 text-black/80 hover:bg-black/5">Export</button>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-1 h-20">
                  {new Array(12).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-black/60 to-black/20 rounded"
                      style={{ height: `${30 + Math.round(Math.sin(i) * 20 + i * 3)}%` }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </motion.div>

              <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                {[{ l: 'Active Users', v: '12,948', d: '+4.2%' }, { l: 'Conversion', v: '7.8%', d: '+0.6%' }, { l: 'Latency', v: '142ms', d: '-12ms' }, { l: 'Uptime', v: '99.99%', d: '+0.01%' }].map((m, idx) => (
                  <motion.div key={idx} whileHover={{ y: -4 }} className="rounded-2xl border border-black/10 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                    <div className="text-black/60 text-sm">{m.l}</div>
                    <div className="mt-1 flex items-end gap-2">
                      <div className="text-2xl font-bold text-black">{m.v}</div>
                      <div className={`text-xs ${m.d.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{m.d}</div>
                    </div>
                  </motion.div>
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
