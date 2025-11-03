import { useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Home', hash: '/#/' },
  { label: 'Case Studies', hash: '/#/case-studies' },
  { label: 'Testimonials', hash: '/#/testimonials' },
];

export default function Navbar() {
  const onNav = useCallback((e, hash) => {
    e.preventDefault();
    // Prevent any flash/spot effects by doing a single hash update and smooth scroll
    const url = new URL(window.location.href);
    url.hash = hash.replace('/#', '#');
    window.history.pushState({}, '', url);

    const id = hash.split('/#/')[1] || '';
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-black/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/#/" onClick={(e) => onNav(e, '/#/')} className="font-semibold tracking-tight text-xl text-black">
          Velodent
        </a>
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.hash}
              onClick={(e) => onNav(e, item.hash)}
              className="text-sm text-black/80 hover:text-black transition-colors underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
          >
            Book Call
          </a>
        </div>
      </nav>
    </header>
  );
}
