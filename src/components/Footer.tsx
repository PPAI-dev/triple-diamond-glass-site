import { Linkedin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                duration: 0.8
              }
            }
          }}
          className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Triple Diamond Glass" 
                className="h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white text-sm font-sans font-medium max-w-xs">
              Triple Diamond Glass Products, LLC – Top-rated <span className="font-bold italic">Glass Repair Venice FL</span> and <span className="font-bold italic">Custom Glass Venice FL</span> specialists.
            </p>
            <address className="text-white text-[10px] font-bold uppercase tracking-widest space-y-1 not-italic">
              <p>126 Corporation Way suite b</p>
              <p>Venice, FL 34285</p>
              <p className="mt-2 text-sm text-[#1E3A8A]">
                <a href="tel:9419151061" className="hover:underline">(941) 915-1061</a>
              </p>
            </address>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Triple Diamond Glass on LinkedIn"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Triple Diamond Glass on Facebook"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center md:items-end gap-2">
            <div className="text-sm text-white font-sans font-light">
              © {new Date().getFullYear()} Triple Diamond Glass Products, LLC
            </div>
            <div className="text-[10px] text-white font-bold uppercase tracking-widest">
              The Diamond Standard
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
