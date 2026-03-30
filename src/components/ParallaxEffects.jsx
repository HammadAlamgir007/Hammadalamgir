import { useReducedMotion, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Parallax Container - Wraps content with parallax effect
 * @param {number} speed - Parallax speed (0.5 = slower, 2 = faster)
 * @param {ReactNode} children - Content to parallax
 */
export const ParallaxSection = ({ children, speed = 0.5 }) => {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        shouldReduceMotion ? [0, 0] : [0, speed * 100]
    );

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

/**
 * Parallax Layer - For multi-layer floating effects
 * @param {number} depth - Layer depth (higher = moves more)
 */
export const ParallaxLayer = ({ children, depth = 1 }) => {
    const shouldReduceMotion = useReducedMotion();
    const { scrollY } = useScroll();
    const y = useTransform(
        scrollY,
        [0, 1000],
        shouldReduceMotion ? [0, 0] : [0, depth * 100]
    );
    const opacity = useTransform(
        scrollY,
        [0, 300],
        shouldReduceMotion ? [1, 1] : [1, 0.3]
    );

    return (
        <motion.div style={{ y, opacity }} className="will-change-transform">
            {children}
        </motion.div>
    );
};

/**
 * Parallax Background - Background moves slower than content
 */
export const ParallaxBackground = ({ children, speed = -0.5 }) => {
    const shouldReduceMotion = useReducedMotion();
    const { scrollY } = useScroll();
    const y = useTransform(
        scrollY,
        [0, 1000],
        shouldReduceMotion ? [0, 0] : [0, speed * 200]
    );

    return (
        <motion.div
            style={{ y }}
            className="absolute inset-0 will-change-transform"
        >
            {children}
        </motion.div>
    );
};

/**
 * Smooth Reveal on Scroll - Fades in with parallax
 */
export const SmoothReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        shouldReduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3],
        shouldReduceMotion ? [1, 1] : [0.8, 1]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        shouldReduceMotion ? [0, 0] : [50, -50]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            transition={{ delay }}
            className="will-change-transform"
        >
            {children}
        </motion.div>
    );
};

/**
 * Floating Element - Subtle continuous movement
 */
export const FloatingElement = ({ children, duration = 3 }) => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.div
            animate={shouldReduceMotion ? undefined : {
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="will-change-transform"
        >
            {children}
        </motion.div>
    );
};

/**
 * Scroll-based Scale - Grows/shrinks on scroll
 */
export const ScrollScale = ({ children }) => {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        shouldReduceMotion ? [1, 1, 1] : [0.8, 1.1, 0.8]
    );

    return (
        <motion.div ref={ref} style={{ scale }} className="will-change-transform">
            {children}
        </motion.div>
    );
};

/**
 * Horizontal Parallax - Moves horizontally on scroll
 */
export const HorizontalParallax = ({ children, direction = 1 }) => {
    const shouldReduceMotion = useReducedMotion();
    const { scrollY } = useScroll();
    const x = useTransform(
        scrollY,
        [0, 1000],
        shouldReduceMotion ? [0, 0] : [0, direction * 100]
    );

    return (
        <motion.div style={{ x }} className="will-change-transform">
            {children}
        </motion.div>
    );
};
