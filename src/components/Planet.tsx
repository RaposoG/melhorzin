"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  id: number;
  name: string;
  subdomain: string;
  description: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  initialRotation: number;
}

export function Planet({ id, name, subdomain, description, color, size, orbitRadius, orbitSpeed, initialRotation }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      if (!hovered) {
        meshRef.current.position.x = Math.sin(t * orbitSpeed + initialRotation) * orbitRadius;
        meshRef.current.position.z = Math.cos(t * orbitSpeed + initialRotation) * orbitRadius;
        meshRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      name={`planet-${id}`}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={() => window.open(`https://${subdomain}.melhorzin.com`, "_blank")}
    >
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial color={new THREE.Color(color)} emissive={new THREE.Color(color)} emissiveIntensity={hovered ? 0.5 : 0.2} />
      </Sphere>
      {hovered && (
        <Html distanceFactor={15}>
          <div className="bg-black text-white p-8 rounded-lg opacity-90 w-[2000px] h-[2000px] flex flex-col justify-center items-center">
            <iframe src={`https://${subdomain}.melhorzin.com`} className="w-full h-[1200px] mb-8 rounded-lg" title={`Preview de ${name}`} />

            <h3 className="font-bold text-[150px] mb-8">{name}</h3>
            <p className="text-[80px] mb-8 text-center max-w-[1800px]">{description}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}
