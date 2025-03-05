"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

export function Sun() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={() => window.open("https://github.com/RaposoG/melhorzin", "_blank")}
    >
      <Sphere args={[5, 64, 64]}>
        <meshStandardMaterial color={new THREE.Color("#FDB813")} emissive={new THREE.Color("#FDB813")} emissiveIntensity={1} />
      </Sphere>
      <pointLight color="#FDB813" intensity={1.5} distance={100} decay={2} />
      {hovered && (
        <Html distanceFactor={15}>
          <div className="bg-black text-white p-4 rounded-lg opacity-90 w-[2000px] h-[2000px]">
            <h3 className="font-bold text-xl mb-2 text-[100px]">Repositório Melhorzin</h3>
            <p className="text-sm mb-2 text-[100px]">O coração do nosso universo de talentos. Aqui convergem todas as habilidades e projetos da nossa equipe.</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}
