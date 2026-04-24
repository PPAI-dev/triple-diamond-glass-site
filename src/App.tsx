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

export default function App() {
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
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <ServiceDetails />
          <Brands />
          <About />
          <Gallery />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
