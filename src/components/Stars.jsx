import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState } from 'react';

export default function Stars(props) {
    const ref = useRef();
    const [sphere] = useState(() => {
        const isNarrow = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)').matches;
        // Keep point count lower on mobile for stable FPS.
        const floatCount = isNarrow ? 2400 : 5000; // stride=3 -> ~800 vs ~1666 points
        return random.inSphere(new Float32Array(floatCount), { radius: 1.5 });
    });

    useFrame((state, delta) => {
        if (!ref.current) return;
        // Slightly slower rotation reduces per-frame visual noise and GPU churn.
        ref.current.rotation.x -= delta / 14;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#88ccff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
