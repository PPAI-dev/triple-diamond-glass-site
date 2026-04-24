import { motion } from 'motion/react';

const brands = [
  { name: 'PGT WinGuard Vinyl', logo: '/winguard-vinyl.avif' },
  { name: 'PGT WinGuard Aluminum', logo: '/winguard-non-vinyl.png' },
  { name: 'PGT PremierVue', logo: '/premier-vue-logo.avif' },
  { name: 'Energy Star', logo: '/energy-star-logo.png' },
  { name: 'Miami-Dade County', logo: '/miami-dade-logo.png' },
  { name: 'NFRC', logo: '/nfrc-logo.png' },
  { name: 'AAMA', logo: '/aama-logo.png' },
];

export default function Brands() {
  // Multiply brands for infinite scroll effect
  const doubleBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-transparent border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-12 h-[1px] bg-[#1E3A8A] mb-6"
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white">
          Partners & Certifications
        </span>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <div className="flex gap-20 md:gap-32 items-center animate-infinite-scroll whitespace-nowrap min-w-full w-max">
          {doubleBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center opacity-85 brightness-110 grayscale-[20%] hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-700 h-16 md:h-20 w-[140px] md:w-[180px] p-2"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-full object-contain pointer-events-none select-none max-h-[40px] md:max-h-[50px] max-w-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
