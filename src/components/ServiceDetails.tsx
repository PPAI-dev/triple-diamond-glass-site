import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useLenis } from './SmoothScroll';

export default function ServiceDetails() {
  const lenis = useLenis();
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -100, duration: 1.5 });
    }
  };

  return (
    <section id="residential" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Area (Left) */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  }
                }
              }}
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="text-xs font-bold uppercase tracking-[0.4em] text-[#1E3A8A] mb-4 block"
              >
                Triple Diamond Glass
              </motion.span>
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                }}
                className="text-5xl md:text-8xl font-heading font-light text-white mb-8 uppercase tracking-tight"
              >
                <span className="italic">Residential & Commercial</span>
              </motion.h2>
              <motion.div 
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 1, ease: "easeOut" } }
                }}
                className="w-full h-px bg-white/10 mb-12 origin-left" 
              />
              
              <div className="space-y-12 text-white font-serif leading-relaxed text-xl max-w-3xl">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-heading font-light uppercase tracking-tight text-white">Residential Glass Excellence</h3>
                  <p className="text-lg opacity-90">
                    Elevating Venice and Sarasota homes with master-crafted <span className="font-bold italic text-white">frameless shower enclosures</span>, custom mirror walls, and precision window repairs. Our residential team specializes in high-end installations that enhance both the beauty and value of your private residence.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                  }}
                  className="space-y-4 border-t border-white/10 pt-8"
                >
                  <h3 className="text-3xl font-heading font-light uppercase tracking-tight text-white">Precision Commercial Glazing</h3>
                  <p className="text-lg opacity-90">
                    Trusted by businesses across Venice, Sarasota, and Englewood for secure <span className="font-bold italic text-white">storefront glass repair</span>, sleek office partitions, and safety-rated architectural glass. We provide the durable, professional-grade glazing solutions that Southwest Florida businesses demand.
                  </p>
                  <p className="text-sm font-sans uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
                    Contact us today for a free quote on your project.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>
                  <Button className="mt-12 bg-[#020617] text-white hover:bg-[#020617]/90 px-10 py-8 text-sm font-black uppercase tracking-widest rounded-none shadow-[0_10px_30px_rgba(2,6,23,0.4)] transition-all hover:scale-105 active:scale-95">
                    VIEW OUR WORK
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar Area (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md p-8 border border-white/10 relative group"
            >
              <div className="bg-white/10 p-8 shadow-sm border border-white/10 text-center space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white block">Triple Diamond</span>
                <p className="text-sm text-white font-medium leading-relaxed">
                  The premier glass company <br />
                  for Southwest Florida <br />
                  with the Diamond standard.
                </p>
                <a href="#contact" className="w-full">
                  <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white py-6 text-xs font-bold uppercase tracking-widest rounded-none">
                    REQUEST A QUOTE
                  </Button>
                </a>
                <div className="pt-4">
                  <a href="tel:9419151061" className="text-2xl font-bold text-white tracking-wide">
                    (941) 915-1061
                  </a>
                </div>
                <div className="text-[11px] text-white font-medium leading-tight">
                  126 Corporation Way suite b <br />
                  Venice, FL 34285
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md p-8 border border-white/10 text-center space-y-6"
            >
              <div className="bg-white/10 p-8 shadow-sm border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white block mb-4">Triple Diamond</span>
                <p className="text-xs text-white font-bold mb-8">
                  Is proud to be a certified <br /> platinum dealer of:
                </p>
                <div className="flex justify-center">
                  <span className="text-3xl font-black tracking-tighter text-white">PGT.</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
