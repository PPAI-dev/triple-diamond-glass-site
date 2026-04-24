import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CursorEffect() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the main glow
  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add a new particle frequently
      if (Math.random() > 0.5) {
        const id = Date.now();
        const colors = ['#1E3A8A', '#FFFFFF', '#020617', '#F8FAFC']; // Navy and White only
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        setParticles((prev) => [
          ...prev.slice(-40), // More particles for a richer trail
          { id, x: e.clientX, y: e.clientY, color }
        ]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 1500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Main Gradient Glow */}
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[100px] opacity-50"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(2, 6, 23, 0.85) 0%, rgba(245, 158, 11, 0.2) 25%, rgba(22, 101, 52, 0.15) 50%, rgba(30, 58, 138, 0.1) 75%, transparent 100%)',
        }}
      />

      {/* Flakes / Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: 1, 
            scale: Math.random() * 0.8 + 0.4,
            rotate: 0 
          }}
          animate={{ 
            x: particle.x + (Math.random() - 0.5) * 150,
            y: particle.y + (Math.random() - 0.5) * 150,
            opacity: 0,
            scale: 0,
            rotate: 720
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-3 h-3 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{ 
            backgroundColor: particle.color,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond shape
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))'
          }}
        />
      ))}
    </div>
  );
}
