import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import BackgroundFX from './components/BackgroundFX';
import DashboardPreview from './components/DashboardPreview';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="bg-white text-black min-h-screen relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <BookingSection />
        <DashboardPreview />
      </main>
    </div>
  );
}

export default App;
