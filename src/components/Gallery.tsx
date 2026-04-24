import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      url: '/Interior 1st and 2nd floor.JPG',
      title: 'Luxury Custom Glass Installation Venice FL',
    },
    {
      url: '/Outdoot Project on a white home.JPG',
      title: 'Exterior Residential Glass Solutions',
    },
    {
      url: '/Outdoor Home Project.JPG',
      title: 'Custom Architectural Glass Railings',
    },
    {
      url: '/Completed yellow Project.JPG',
      title: 'Premium Balcony Glass Enclosure Sarasota',
    },
    {
      url: '/Outdoor window job.JPG',
      title: 'Storefront Glass Repair & Installation',
    },
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-8xl font-heading font-light mb-8 text-white uppercase tracking-tight">Our <span className="italic">Work</span></h2>
            <p className="text-xl text-white/50 font-sans font-light italic">
              Explore our portfolio of high-end glass installations across Southwest Florida.
            </p>
          </div>
          <div className="text-[#1E3A8A] font-sans font-black tracking-[0.4em] uppercase text-xs border-b-2 border-[#1E3A8A] pb-2">
            PORTFOLIO
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: (index % 3) * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.5 }
              }}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(2,6,23,0.6)] transition-all duration-700 perspective-1000"
            >
              <img
                src={image.url}
                alt={`${image.title} - Triple Diamond Glass Services`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0F172A]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-12 text-center">
                <div className="overflow-hidden">
                  <p className="text-white font-heading font-black text-2xl uppercase tracking-[0.2em] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    {image.title}
                  </p>
                  <div className="w-12 h-1 bg-[#1E3A8A] mx-auto mt-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={40} />
            </motion.button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110] p-2"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110] p-2"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                <h3 className="text-white font-heading font-black text-2xl md:text-4xl uppercase tracking-[0.2em]">
                  {images[selectedIndex].title}
                </h3>
                <p className="text-white/50 mt-2 font-sans">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

