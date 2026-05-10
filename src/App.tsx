import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Brands from './components/Brands';
import Gallery from './components/Gallery';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScrollProvider } from './components/SmoothScroll';
import { motion, useScroll, useSpring } from 'motion/react';

const sectionMap: Record<string, string> = {
  '/services': 'services',
  '/gallery': 'gallery',
  '/about': 'about',
  '/contact': 'contact',
};

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = sectionMap[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return null;
}

function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A8A] via-white/50 to-[#1E3A8A] z-[100] origin-left"
          style={{ scaleX }}
        />
        <div className="light-sweep" />
        <CursorEffect />
        <ScrollToTop />
        <ScrollHandler />
        <Header />
        <main className="flex-grow">
          <Hero />
          <section id="services"><Services /><ServiceDetails /></section>
          <Brands />
          <section id="about"><About /></section>
          <section id="gallery"><Gallery /></section>
          <CTA />
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
