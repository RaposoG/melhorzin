"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "./Sun";
import { Planet } from "./Planet";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const portfolios = [
  {
    id: 1,
    name: "Henrique Teixeira",
    subdomain: "henriqueteixeira.dev",
    description: "pinto",
    color: "#FF4500",
    size: 1.5,
    orbitRadius: 20,
    orbitSpeed: 0.05,
  },
  {
    id: 2,
    name: "Leonardo",
    subdomain: "leonardo",
    description: "pinto",
    color: "#FFD700",
    size: 1.7,
    orbitRadius: 30,
    orbitSpeed: 0.04,
  },
  {
    id: 3,
    name: "Lk Giovani",
    subdomain: "lkgiovani",
    description: "Desenvolvedor full-stack com projetos inovadores em React e Node.js.",
    color: "#1E90FF",
    size: 1.8,
    orbitRadius: 40,
    orbitSpeed: 0.03,
  },
  {
    id: 4,
    name: "Luiz Bello",
    subdomain: "luizpbello",
    description: "pinto",
    color: "#8A2BE2",
    size: 1.6,
    orbitRadius: 50,
    orbitSpeed: 0.025,
  },
  {
    id: 5,
    name: "Matheus",
    subdomain: "matheusvp2",
    description: "pinto",
    color: "#FF6347",
    size: 2,
    orbitRadius: 60,
    orbitSpeed: 0.02,
  },
  {
    id: 6,
    name: "Mathwz",
    subdomain: "mathwz",
    description: "pinto",
    color: "#00CED1",
    size: 1.7,
    orbitRadius: 70,
    orbitSpeed: 0.015,
  },
  {
    id: 7,
    name: "Michel",
    subdomain: "micode",
    description: "pinto",
    color: "#FFA500",
    size: 1.9,
    orbitRadius: 80,
    orbitSpeed: 0.01,
  },
  {
    id: 8,
    name: "Railsinho",
    subdomain: "railsinho",
    description: "pinto",
    color: "#9370DB",
    size: 1.5,
    orbitRadius: 90,
    orbitSpeed: 0.008,
  },
  {
    id: 9,
    name: "Bruno",
    subdomain: "raposo",
    description: "pinto",
    color: "#20B2AA",
    size: 1.4,
    orbitRadius: 100,
    orbitSpeed: 0.006,
  },
];

function BackgroundStars() {
  const { scene } = useThree();
  const starsRef = useRef<THREE.Points>(null!);

  const [geometry, material, vertices] = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      sizeAttenuation: true,
    });

    return [geometry, material, vertices];
  }, []);

  return <points ref={starsRef} geometry={geometry} material={material} />;
}

export default function Universe() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 50, 150], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BackgroundStars />
        <Sun />
        {portfolios.map((portfolio) => (
          <Planet key={portfolio.id} {...portfolio} initialRotation={Math.random() * Math.PI * 2} />
        ))}
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
