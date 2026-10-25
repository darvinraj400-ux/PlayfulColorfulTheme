import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import FeatureBand from './components/FeatureBand';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Scroll reveal observer
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-butter text-plum overflow-x-hidden">
      {/* Skip to content */}
      <a href="#top" className="skip-link">
        Skip to main content
      </a>

      {/* Announcement bar */}
      <AnnouncementBar />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main id="main-content">
        {/* Hero */}
        <Hero />

        {/* Ticker */}
        <Ticker />

        {/* Portfolio */}
        <div className="reveal-section">
          <Portfolio />
        </div>

        {/* Philosophy */}
        <div className="reveal-section">
          <Philosophy />
        </div>

        {/* Feature band */}
        <div className="reveal-section">
          <FeatureBand />
        </div>

        {/* Contact */}
        <div className="reveal-section">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
