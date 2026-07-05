import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, memo } from 'react';

const AnimatedBackground = memo(function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({   // reduced from 14 → 8 for performance
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      driftX: Math.random() * 40 - 20,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  , []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full
                   bg-gradient-to-r from-violet-600/15 to-indigo-600/15 blur-3xl"
        animate={shouldReduceMotion ? undefined : {
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '5%', left: '5%' }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full
                   bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-3xl"
        animate={shouldReduceMotion ? undefined : {
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '5%', right: '5%' }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full
                   bg-gradient-to-r from-indigo-500/12 to-purple-500/12 blur-3xl"
        animate={shouldReduceMotion ? undefined : {
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '40%', right: '25%' }}
      />

      {/* Floating particles (desktop-friendly, fewer) */}
      {!shouldReduceMotion && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-primary/50 rounded-full"
          animate={{
            y: [0, -90, 0],
            x: [0, p.driftX, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.025)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]" />
    </div>
  );
});

export default AnimatedBackground;
