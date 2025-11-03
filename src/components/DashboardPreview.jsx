import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, BarChart3, Shield } from 'lucide-react';

const Metric = ({ label, value, delta }) => (
  <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
    <div className="text-white/60 text-sm">{label}</div>
    <div className="mt-1 flex items-end gap-2">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className={`text-xs ${delta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{delta}</div>
    </div>
  </motion.div>
);

const MiniChart = () => (
  <div className="grid grid-cols-12 gap-1 h-20">
    {new Array(12).fill(0).map((_, i) => (
      <motion.div
        key={i}
        className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded"
        style={{ height: `${30 + Math.round(Math.sin(i) * 20 + i * 3)}%` }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
      />
    ))}
  </div>
);

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">Dashboard Portal</h3>
            <p className="mt-2 text-white/70 max-w-2xl">A glimpse of the enterprise portal: realtime insights, security by default, and delightful interactions.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/70">
            <Shield className="h-5 w-5" /> Secure
            <BarChart3 className="h-5 w-5" /> Analytics
            <Star className="h-5 w-5" /> UX
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-semibold">Revenue Overview</div>
                  <div className="text-white/60 text-sm">Last 12 months</div>
                </div>
              </div>
              <button className="rounded-full border border-white/20 px-3 py-1 text-white/80 hover:bg-white/10">Export</button>
            </div>

            <div className="mt-6">
              <MiniChart />
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            <Metric label="Active Users" value="12,948" delta="+4.2%" />
            <Metric label="Conversion" value="7.8%" delta="+0.6%" />
            <Metric label="Latency" value="142ms" delta="-12ms" />
            <Metric label="Uptime" value="99.99%" delta="+0.01%" />
          </div>
        </div>
      </div>
    </section>
  );
}
