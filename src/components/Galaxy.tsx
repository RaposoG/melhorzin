import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Developer } from '../types';

interface DeveloperPointProps {
  developer: Developer;
  onClick: (dev: Developer) => void;
}

function DeveloperPoint({ developer, onClick }: DeveloperPointProps) {
  const pointRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (pointRef.current) {
      pointRef.current.rotation.x += 0.001;
      pointRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh
      ref={pointRef}
      position={developer.position}
      onClick={() => onClick(developer)}
    >
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      <Html distanceFactor={10}>
        <div className="bg-black/80 text-white p-2 rounded-lg whitespace-nowrap">
          {developer.name}
        </div>
      </Html>
    </mesh>
  );
}

interface GalaxyProps {
  developers: Developer[];
  onDeveloperClick: (dev: Developer) => void;
}

export function Galaxy({ developers, onDeveloperClick }: GalaxyProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={20}
        zoomSpeed={1}
        panSpeed={0.5}
        rotateSpeed={0.5}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4}
        fade={true}
        speed={1}
      />
      {developers.map((dev) => (
        <DeveloperPoint
          key={dev.id}
          developer={dev}
          onClick={onDeveloperClick}
        />
      ))}
    </Canvas>
  );
}