import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, BarChart3, Shield, Users, Clock, CheckCircle2, Activity } from 'lucide-react';

const Metric = ({ label, value, delta }) => (
  <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
    <div className="text-black/60 text-sm">{label}</div>
    <div className="mt-1 flex items-end gap-2">
      <div className="text-2xl font-bold text-black">{value}</div>
      <div className={`text-xs ${delta.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{delta}</div>
    </div>
  </motion.div>
);

const Bars = () => (
  <div className="grid grid-cols-12 gap-1 h-24">
    {new Array(12).fill(0).map((_, i) => (
      <motion.div
        key={i}
        className="bg-gradient-to-t from-black/70 to-black/20 rounded"
        style={{ height: `${35 + Math.round(Math.sin(i) * 18 + i * 3)}%` }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
      />
    ))}
  </div>
);

const ListItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-center justify-between rounded-xl border border-black/10 p-3">
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-lg border border-black/10 flex items-center justify-center"><Icon className="h-4 w-4 text-black/70"/></div>
      <div className="text-black/80">{title}</div>
    </div>
    <div className="text-sm font-semibold text-black">{value}</div>
  </div>
);

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-black">Dashboard Portal</h3>
            <p className="mt-2 text-black/70 max-w-2xl">Minimal, information-dense, and calm. A refined preview of the portal patients and staff will love.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-black/70">
            <Shield className="h-5 w-5" /> Secure
            <BarChart3 className="h-5 w-5" /> Analytics
            <Star className="h-5 w-5" /> UX
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Primary chart */}
          <motion.div whileHover={{ scale: 1.01 }} className="lg:col-span-3 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
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
            <div className="mt-6">
              <Bars />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <ListItem icon={Users} title="New patients" value="+382" />
              <ListItem icon={Clock} title="Avg. response" value="28s" />
              <ListItem icon={CheckCircle2} title="No-shows" value="-19%" />
            </div>
          </motion.div>

          {/* Side stack */}
          <div className="lg:col-span-2 grid grid-rows-6 gap-6">
            <div className="row-span-3 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div className="text-black font-semibold">Operational Health</div>
                <Activity className="h-4 w-4 text-black/60" />
              </div>
              <div className="mt-4 space-y-3">
                <ListItem icon={Users} title="Active users" value="12,948" />
                <ListItem icon={BarChart3} title="Conversion" value="7.8%" />
                <ListItem icon={Clock} title="Latency" value="142ms" />
                <ListItem icon={Shield} title="Uptime" value="99.99%" />
              </div>
            </div>
            <div className="row-span-3 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <div className="text-black font-semibold">Today</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Metric label="Appointments" value="64" delta="+12" />
                <Metric label="Bookings" value="42" delta="+8" />
                <Metric label="Payments" value="$12.6k" delta="+4%" />
                <Metric label="Messages" value="1,204" delta="+6%" />
              </div>
              <div className="mt-4">
                <Bars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
