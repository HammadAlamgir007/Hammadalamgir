import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const Starfield = () => {
    const shouldReduceMotion = useReducedMotion();

    // Keep counts conservative to reduce layout/paint work during scrolling.
    const { fallingStars, twinklingStars, shootingStars } = useMemo(() => {
        const isNarrow = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)').matches;
        const fallingCount = isNarrow ? 24 : 48;
        const twinkleCount = isNarrow ? 12 : 24;
        const shootingCount = isNarrow ? 1 : 2;

        const mkStar = (id) => ({
            id,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 18 + 10,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.6 + 0.25,
            driftX: Math.random() * 50 - 25,
        });

        const fallingStarsLocal = Array.from({ length: fallingCount }, (_, i) => mkStar(i));
        const twinklingStarsLocal = fallingStarsLocal.slice(0, twinkleCount);
        const shootingStarsLocal = Array.from({ length: shootingCount }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 50,
            delay: i * 9,
        }));

        return {
            fallingStars: fallingStarsLocal,
            twinklingStars: twinklingStarsLocal,
            shootingStars: shootingStarsLocal,
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Falling Stars */}
            {!shouldReduceMotion && fallingStars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `-5%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [0, star.driftX],
                        opacity: [0, star.opacity, star.opacity, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Twinkling Stars (Static) */}
            {!shouldReduceMotion && twinklingStars.map((star) => (
                <motion.div
                    key={`twinkle-${star.id}`}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size * 0.5}px`,
                        height: `${star.size * 0.5}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Shooting Stars */}
            {!shouldReduceMotion && shootingStars.map((s) => (
                <motion.div
                    key={`shooting-${s.id}`}
                    className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                    }}
                    animate={{
                        x: [0, 300],
                        y: [0, 200],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: s.delay,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Nebula Effect */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                        left: '20%',
                        top: '30%',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                        right: '20%',
                        bottom: '30%',
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>
        </div>
    );
};

export default Starfield;
