import { Home, Building2, Diamond, Maximize } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Residential Glass Repair',
      description: 'Expert residential glass repair and window replacement for Venice homeowners. We provide premium glass solutions that restore the safety and curb appeal of your private residence.',
      icon: Home,
      image: '/Outdoot Project on a white home.JPG',
    },
    {
      title: 'Shower Glass Installation',
      description: 'Elite frameless shower glass installation for luxury Sarasota and Venice bathrooms. Transform your space with high-end, custom-fitted glass designed for lasting elegance.',
      icon: Building2,
      image: '/Outdoor window job.JPG',
    },
    {
      title: 'Storefront & Commercial Glass',
      description: 'Durable storefront glass repair and architectural glazing for businesses across Venice and Sarasota. From office partitions to security glass, we protect your commercial property.',
      icon: Diamond,
      image: '/Completed yellow Project.JPG',
    },
    {
      title: 'Custom Glass & Mirrors',
      description: 'Bespoke mirrors and precision-cut glass features tailored for Venice’s finest interiors. Elevate your home with master-crafted glass designs built to your exact specifications.',
      icon: Maximize,
      image: '/Outdoor Home Project.JPG',
    },
  ];

  return (
    <section id="services" className="py-24 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-8xl font-heading font-light mb-8 uppercase tracking-tight">Our <span className="italic">Services</span></h2>
          <p className="text-xl text-white/50 font-sans font-light leading-relaxed italic">
            From architectural masterpieces to functional commercial spaces, we provide the Triple Diamond standard in every pane.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: index % 2 === 0 ? 5 : -5,
                transition: { duration: 0.5 }
              }}
              className="group relative aspect-[3/4] md:aspect-square lg:aspect-[4/3] overflow-hidden glass perspective-1000"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                initial={{ scale: 1.2, filter: "brightness(0.3) grayscale(100%)" }}
                whileInView={{ scale: 1, filter: "brightness(0.5) grayscale(50%)" }}
                viewport={{ margin: "-200px" }}
                src={service.image}
                alt={`${service.title} - Triple Diamond Glass Venice FL`}
                loading="lazy"
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <motion.div 
                  initial={{ opacity: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, rotate: 45 }}
                  transition={{ delay: (index * 0.1) + 0.5, duration: 0.8 }}
                  className="w-12 h-12 border border-white/40 flex items-center justify-center mb-6 transition-all group-hover:bg-white group-hover:border-white shadow-lg"
                >
                  <service.icon size={20} className="text-white group-hover:text-black -rotate-45 transition-colors duration-500" />
                </motion.div>
                <h3 className="text-3xl font-heading font-light mb-4 uppercase tracking-tight italic drop-shadow-md">{service.title}</h3>
                <p className="text-white/70 font-sans font-light leading-relaxed mb-6 text-sm max-w-xs drop-shadow-sm">
                  {service.description}
                </p>
                <div className="w-10 h-[1px] bg-white/40 transition-all duration-700 group-hover:w-full group-hover:bg-[#1E3A8A]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
