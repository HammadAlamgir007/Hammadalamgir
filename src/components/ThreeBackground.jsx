import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useReducedMotion } from 'framer-motion';
import Stars from './Stars';

export default function ThreeBackground({ darkMode = true }) {
    const shouldReduceMotion = useReducedMotion();
    const isNarrow = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)').matches;
    const shouldRender = darkMode && !shouldReduceMotion && !isNarrow;

    return (
        <div className="absolute inset-0 z-0">
            {shouldRender ? (
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: false, powerPreference: 'high-performance' }}
                >
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                </Canvas>
            ) : null}
        </div>
    );
}
