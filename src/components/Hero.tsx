import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLenis } from './SmoothScroll';

export default function Hero() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -100, duration: 1.5 });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ y }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/Interior 1st and 2nd floor.JPG"
          alt="Triple Diamond Glass Products | Luxury Custom Glass Venice FL"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Triple Diamond Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/40 to-[#0F172A]/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32">
        <motion.div 
          className="max-w-4xl"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <motion.h1 
            className="text-6xl md:text-9xl font-heading font-light text-white leading-[0.9] mb-8 drop-shadow-2xl uppercase tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="inline-block italic"
            >
              Triple
            </motion.span>{" "}
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="inline-block font-normal text-white/90"
            >
              Diamond
            </motion.span> <br />
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="inline-block text-[#1E3A8A] font-medium"
            >
              Glass
            </motion.span>{" "}
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="inline-block text-sm md:text-xl font-sans font-medium tracking-[0.4em] text-white align-middle ml-4"
            >
              Products, LLC
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-serif leading-relaxed italic"
          >
            Venice’s premier destination for <span className="text-white font-semibold">Custom Glass Design</span>, <span className="text-white font-semibold">Elite Installations</span>, and <span className="text-white font-semibold">Precision Repair</span>. 
            Serving Venice, Sarasota, and Englewood with certified master craftsmanship and the Diamond Standard of service. 
            <span className="block mt-4 text-sm non-italic font-sans uppercase tracking-[0.3em] text-[#3B82F6] font-bold">Licensed & Fully Insured • Venice Top Rated</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-8 text-lg font-black uppercase tracking-[0.3em] rounded-none shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] active:scale-95 border border-white/20">
                GET A FREE QUOTE
              </Button>
            </a>
            <a href="tel:9419151061">
              <Button size="lg" className="bg-transparent text-white hover:bg-white/10 px-12 py-8 text-lg font-black uppercase tracking-widest rounded-none shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all hover:scale-105 active:scale-95 border border-white/20 backdrop-blur-sm">
                CALL NOW (941) 915-1061
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
