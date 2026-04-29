import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-6xl md:text-8xl font-heading font-light mb-8 text-white uppercase tracking-tight leading-none">
              Get Your <span className="italic text-white">Free Quote</span>
            </h2>
            <p className="text-xl text-white mb-16 font-serif leading-relaxed max-w-md">
              Fast Response • Precise Craftsmanship • Venice & Sarasota's Local Glass Experts. Reach out today to start your project.
            </p>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {[
                { label: 'Free On-Site Estimates', color: '#10B981' },
                { label: 'Fast Response Times', color: '#3B82F6' },
                { label: 'Fully Licensed & Insured', color: '#F59E0B' },
                { label: 'Serving Southwest Florida', color: '#EF4444' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4">
                   <div className="w-6 h-6 border border-white/20 flex items-center justify-center rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                   </div>
                   <span className="text-lg font-heading text-white/90 tracking-wide">{item.label}</span>
                </motion.div>
              ))}

              <div className="pt-8 space-y-8">
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="group flex items-center gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white group-hover:border-white/40 transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading italic text-sm text-white tracking-widest mb-1">Direct Line</h4>
                    <p className="text-xl font-heading text-white tracking-wider">(941) 915-1061</p>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="group flex items-center gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white group-hover:border-white/40 transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading italic text-sm text-white tracking-widest mb-1">Email Inquiry</h4>
                    <p className="text-xl font-heading text-white tracking-wider">info@triplediamondglass.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 border border-white/5 shadow-2xl relative"
          >
           <div className="w-full h-[700px] rounded-lg overflow-hidden bg-transparent">
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/MY25NQ01iLnoEYDe0zFj"
    style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
    title="Triple Diamond Glass Submission Form"
  />
</div>
          </motion.div>
        </div>

        {/* Google Map Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full h-[450px] relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.831346263548!2d-82.4148416!3d27.1009139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c35076a0860001%3A0x8f8f8f8f8f8f8f8f!2s126%20Corporation%20Way%20%23b%2C%20Venice%2C%20FL%2034285!5e0!3m2!1sen!2sus!4v1713130000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Triple Diamond Glass Location"
            className="opacity-60 hover:opacity-100 transition-opacity duration-1000"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-[#020617]/50" />
        </motion.div>
      </div>
    </section>
  );
}
