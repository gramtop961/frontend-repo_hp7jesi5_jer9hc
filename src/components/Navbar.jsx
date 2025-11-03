import React from 'react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base text-black/70 hover:text-black transition-colors px-3 py-2"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 backdrop-blur-xl px-4 md:px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl border border-black/20 bg-white" />
            <span className="font-semibold text-black tracking-wide">Velodent</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#philosophy">Philosophy</NavItem>
            <NavItem href="#case-studies">Case Studies</NavItem>
            <NavItem href="#faq">FAQ</NavItem>
          </div>

          <a
            href="#dashboard"
            className="inline-flex items-center rounded-full border border-black bg-black text-white text-sm font-semibold px-4 py-2 hover:opacity-90 transition"
          >
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
}
