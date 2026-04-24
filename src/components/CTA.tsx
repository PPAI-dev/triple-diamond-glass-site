import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'motion/react';

export default function CTA() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          style={{ y }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Triple Diamond Glass | Commercial Storefront & Custom Glass Venice FL"
          loading="lazy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0F172A]/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="text-6xl md:text-9xl font-heading font-light text-white mb-10 leading-tight uppercase tracking-tight"
          >
            The <span className="text-white italic">Diamond</span> Standard
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="text-2xl text-white mb-12 font-serif leading-relaxed italic"
          >
            From <span className="font-bold">Storefront Glass Repair</span> to custom home mirrors, we bring the Diamond standard to every Venice, FL project. 
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <a href="#contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-16 py-10 text-lg font-black uppercase tracking-[0.2em] rounded-none shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95 border border-white/20">
                Get a Free Quote
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
