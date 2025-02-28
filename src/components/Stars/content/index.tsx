import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { type Points as TPoints } from 'three';
import { useMicodeStore } from '@/src/stores';

export const StarsContent = () => {
  const { dark } = useMicodeStore();
  const ref = useRef<TPoints>(null);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), {
      radius: 1.2
    })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={dark ? '#000' : '#fff'}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
