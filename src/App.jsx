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
    // Ensure a default route
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
