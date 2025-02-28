import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { CanvasContainer } from './styles';
import { StarsContent } from './content';

export const Stars = () => {
  return (
    <CanvasContainer aria-label='stars'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsContent />
        </Suspense>

        <Preload all />
      </Canvas>
    </CanvasContainer>
  );
};
