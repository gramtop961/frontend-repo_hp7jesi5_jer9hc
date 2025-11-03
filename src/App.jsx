import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function handleHashScroll() {
  const hash = window.location.hash; // e.g. #/case-studies
  const path = hash.startsWith('#/') ? hash.slice(2) : hash.replace('#', '');
  const id = path || '';
  if (!id || id === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function App() {
  useEffect(() => {
    // Ensure clean transitions without flash/spot artifacts
    const onChange = () => handleHashScroll();
    window.addEventListener('hashchange', onChange);
    // Initial navigation sync
    handleHashScroll();
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
