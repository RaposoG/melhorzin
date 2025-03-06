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
    description: "Desenvolvedor apaixonado por criar soluções criativas com design moderno.",
    color: "#FF4500",
    size: 4.5, // 1.5 * 3
    orbitRadius: 40,
    orbitSpeed: 0.05,
  },
  {
    id: 2,
    name: "Leonardo",
    subdomain: "leonardo",
    description: "Explorador de código que transforma ideias em experiências digitais incríveis.",
    color: "#FFD700",
    size: 5.1, // 1.7 * 3
    orbitRadius: 60,
    orbitSpeed: 0.04,
  },
  {
    id: 3,
    name: "Lk Giovani",
    subdomain: "lkgiovani",
    description: "Desenvolvedor full-stack com projetos inovadores em React e Node.js.",
    color: "#1E90FF",
    size: 5.4, // 1.8 * 3
    orbitRadius: 80,
    orbitSpeed: 0.03,
  },
  {
    id: 4,
    name: "Luiz Bello",
    subdomain: "luizpbello",
    description: "Mestre em construir sistemas robustos e interfaces elegantes.",
    color: "#8A2BE2",
    size: 4.8, // 1.6 * 3
    orbitRadius: 100,
    orbitSpeed: 0.025,
  },
  {
    id: 5,
    name: "Matheus",
    subdomain: "matheusvp2",
    description: "Criador de aplicações dinâmicas com foco em performance e usabilidade.",
    color: "#FF6347",
    size: 6, // 2 * 3
    orbitRadius: 120,
    orbitSpeed: 0.02,
  },
  {
    id: 6,
    name: "Mathwz",
    subdomain: "mathwz",
    description: "Entusiasta de tecnologia que une criatividade e lógica em cada projeto.",
    color: "#00CED1",
    size: 5.1, // 1.7 * 3
    orbitRadius: 140,
    orbitSpeed: 0.015,
  },
  {
    id: 7,
    name: "Michel",
    subdomain: "micode",
    description: "Arquiteto de software com uma paixão por códigos limpos e eficientes.",
    color: "#FFA500",
    size: 5.7, // 1.9 * 3
    orbitRadius: 160,
    orbitSpeed: 0.01,
  },
  {
    id: 8,
    name: "Railsinho",
    subdomain: "railsinho",
    description: "Especialista em Rails que entrega soluções rápidas e escaláveis.",
    color: "#9370DB",
    size: 9.5, // 1.5 * 3
    orbitRadius: 180,
    orbitSpeed: 0.008,
  },
  {
    id: 9,
    name: "Raposo",
    subdomain: "raposo",
    description: "Desenvolvedor versátil com um toque de inovação em cada linha de código.",
    color: "#20B2AA",
    size: 4.2, // 1.4 * 3
    orbitRadius: 200,
    orbitSpeed: 0.006,
  },
  {
    id: 10,
    name: "Thales Gonçalves",
    subdomain: "thalesgoncalves",
    description: "Visionário tech que constrói o futuro, um commit de cada vez.",
    color: "#20B2AA",
    size: 4.2, // 1.4 * 3
    orbitRadius: 220,
    orbitSpeed: 0.006,
  },
];

function generateRandomColor(existingColors: string[]): string {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (existingColors.includes(color) || isColorTooDark(color) || isColorTooLight(color) || isColorTooClose(color, existingColors));
  return color;
}

function isColorTooDark(color: string): boolean {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 50;
}

function isColorTooLight(color: string): boolean {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 205;
}

function isColorTooClose(color: string, existingColors: string[]): boolean {
  const threshold = 100;
  const [r1, g1, b1] = hexToRgb(color);
  return existingColors.some((existingColor) => {
    const [r2, g2, b2] = hexToRgb(existingColor);
    const distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
    return distance < threshold;
  });
}

function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

const existingColors: string[] = [];

portfolios.forEach((portfolio) => {
  const color = generateRandomColor(existingColors);
  portfolio.color = color;
  existingColors.push(color);
});

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
