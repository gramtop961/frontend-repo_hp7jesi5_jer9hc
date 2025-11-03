import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundFX from './components/BackgroundFX';
import DashboardSignIn from './components/DashboardSignIn';
import Showcase from './components/Showcase';

function App() {
  const getRoute = () => (typeof window !== 'undefined' ? window.location.hash.replace('#', '') || '/' : '/');
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Smooth scroll to in-page sections when route points to them (e.g., #/testimonials)
  useEffect(() => {
    if (!route.startsWith('/dashboard')) {
      const anchor = route.slice(1); // '' | 'testimonials' | 'case-studies' | ...
      if (anchor) {
        // Allow DOM to paint first
        requestAnimationFrame(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      } else {
        // Scroll to top on home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [route]);

  const content = useMemo(() => {
    if (route.startsWith('/dashboard')) {
      return <DashboardSignIn />;
    }
    // Home
    return (
      <>
        <Hero />
        <Showcase />
      </>
    );
  }, [route]);

  return (
    <div className="bg-white text-black min-h-screen relative">
      <BackgroundFX />
      <Navbar currentRoute={route} />
      <main className="pt-0">{content}</main>
    </div>
  );
}

export default App;
