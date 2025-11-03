import React from 'react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="relative text-sm md:text-base text-black/70 hover:text-black transition-colors px-3 py-2 group"
  >
    <span>{children}</span>
    <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 backdrop-blur-xl px-4 md:px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-semibold text-black tracking-wide">Velodent</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#dashboard">Dashboard</NavItem>
            <NavItem href="#case-studies">Case Studies</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
          </div>

          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black bg-black text-white text-sm font-semibold px-4 py-2 hover:opacity-90 transition shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            Book Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
