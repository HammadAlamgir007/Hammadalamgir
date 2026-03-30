import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

export default function AnimatedBackground() {
    const shouldReduceMotion = useReducedMotion();
    const particles = useMemo(() => {
        // Precompute random values once to avoid layout thrash from render-time Math.random().
        return Array.from({ length: 14 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            driftX: Math.random() * 50 - 25,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
                animate={shouldReduceMotion ? undefined : {
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ top: '10%', left: '10%' }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-3xl"
                animate={shouldReduceMotion ? undefined : {
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ bottom: '10%', right: '10%' }}
            />

            <motion.div
                className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
                animate={shouldReduceMotion ? undefined : {
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ top: '50%', right: '20%' }}
            />

            {/* Floating particles */}
            {!shouldReduceMotion && particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                    animate={{
                        y: [0, -100, 0],
                        x: [0, p.driftX, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                    }}
                />
            ))}

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
    );
}
