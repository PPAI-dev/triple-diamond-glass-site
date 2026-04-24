import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ scale, opacity }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
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
            className="lg:col-span-12 max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="inline-block px-4 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8"
            >
              OUR COMPANY
            </motion.div>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="text-6xl md:text-8xl font-heading font-light mb-10 leading-none text-white uppercase tracking-tight"
            >
              The <span className="text-[#1E3A8A] italic">Triple Diamond</span> <br /> Standard
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-xl text-white mb-8 font-serif leading-relaxed"
            >
              Based in Venice, Florida, Triple Diamond Glass Products, LLC is the premier choice for <span className="text-[#1E3A8A] font-bold">Residential & Commercial Glass Services</span>. For over 15 years, we have provided top-tier glass repair Venice FL solutions to homeowners and elite businesses throughout the Gulf Coast.
            </motion.p>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-xl text-white mb-12 font-serif leading-relaxed italic"
            >
              Our team of expert craftsmen is dedicated to excellence, priding ourselves on attention to detail, clean installation processes, and turning complex architectural visions into stunning glass realities.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10 max-w-lg mx-auto"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-5xl font-black text-white mb-2 tracking-tighter"
                >
                  15+
                </motion.div>
                <div className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Years Experience</div>
              </div>
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-5xl font-black text-white mb-2 tracking-tighter"
                >
                  500+
                </motion.div>
                <div className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
