"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "./Sun";
import { Planet } from "./Planet";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomSize() {
  return Math.random() * (8 - 3.0) + 3.0; // Tamanhos ligeiramente menores
}

interface Portfolio {
  id: number;
  name: string;
  subdomain: string;
  description: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
}

const portfolios = shuffleArray([
  {
    id: 1,
    name: "Henrique Teixeira",
    subdomain: "henriqueteixeira.dev",
    description: "Desenvolvedor apaixonado por criar soluções criativas com design moderno.",
    color: "#FF4500",
    orbitRadius: 60,
    orbitSpeed: 0.05,
  },
  {
    id: 2,
    name: "Leonardo",
    subdomain: "leonardo",
    description: "Explorador de código que transforma ideias em experiências digitais incríveis.",
    color: "#FFD700",
    orbitRadius: 120,
    orbitSpeed: 0.04,
  },
  {
    id: 3,
    name: "Lk Giovani",
    subdomain: "lkgiovani",
    description: "Desenvolvedor full-stack com projetos inovadores em React e Node.js.",
    color: "#1E90FF",
    orbitRadius: 180,
    orbitSpeed: 0.03,
  },
  {
    id: 4,
    name: "Luiz Bello",
    subdomain: "luizpbello",
    description: "Mestre em construir sistemas robustos e interfaces elegantes.",
    color: "#8A2BE2",
    orbitRadius: 240,
    orbitSpeed: 0.025,
  },
  {
    id: 5,
    name: "Matheus",
    subdomain: "matheusvp2",
    description: "Criador de aplicações dinâmicas com foco em performance e usabilidade.",
    color: "#FF6347",
    orbitRadius: 280,
    orbitSpeed: 0.02,
  },
  {
    id: 6,
    name: "Mathwz",
    subdomain: "mathwz",
    description: "Entusiasta de tecnologia que une criatividade e lógica em cada projeto.",
    color: "#00CED1",
    orbitRadius: 320,
    orbitSpeed: 0.015,
  },
  {
    id: 7,
    name: "Michel",
    subdomain: "micode",
    description: "Arquiteto de software com uma paixão por códigos limpos e eficientes.",
    color: "#FFA500",
    orbitRadius: 360,
    orbitSpeed: 0.01,
  },
  {
    id: 8,
    name: "Railsinho",
    subdomain: "railsinho",
    description: "Especialista em Rails que entrega soluções rápidas e escaláveis.",
    color: "#9370DB",
    orbitRadius: 420,
    orbitSpeed: 0.008,
  },
  {
    id: 9,
    name: "Raposo",
    subdomain: "raposo",
    description: "Desenvolvedor versátil com um toque de inovação em cada linha de código.",
    color: "#20B2AA",
    orbitRadius: 480,
    orbitSpeed: 0.006,
  },
  {
    id: 10,
    name: "Thales Gonçalves",
    subdomain: "thalesgoncalves",
    description: "Visionário tech que constrói o futuro, um commit de cada vez.",
    color: "#20B2AA",
    orbitRadius: 540,
    orbitSpeed: 0.006,
  },
  {
    id: 11,
    name: "Erick Marllon",
    subdomain: "ErickMarllon",
    description: "Visionário tech que constrói o futuro, um commit de cada vez.",
    color: "#20B2AA",
    orbitRadius: 620,
    orbitSpeed: 0.006,
  },
  {
    id: 12,
    name: "Brayan",
    subdomain: "strilgui",
    description: "Visionário tech que constrói o futuro, um commit de cada vez.",
    color: "#20B2AA",
    orbitRadius: 680,
    orbitSpeed: 0.006,
  },
  {
    id: 13,
    name: "Rossado",
    subdomain: "rossado",
    description: "Visionário tech que constrói o futuro, um commit de cada vez.",
    color: "#20B2AA",
    orbitRadius: 740,
    orbitSpeed: 0.006,
  },
]).map((portfolio, index) => ({
  ...portfolio,
  size: getRandomSize(),
  orbitRadius: 30 + index * 20, // Reduzi a distância inicial e o espaçamento entre órbitas
  orbitSpeed: 0.05 - index * 0.003, // Ajustei a velocidade para órbitas mais próximas
}));

function BackgroundStars() {
  const { scene } = useThree();
  const starsRef = useRef<THREE.Points>(null!);

  const [geometry, material] = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      // Reduzi número de estrelas para melhor performance
      const x = (Math.random() - 0.5) * 1000; // Reduzi a dispersão das estrelas
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5, // Estrelas menores
      sizeAttenuation: true,
    });

    return [geometry, material];
  }, []);

  return <points ref={starsRef} geometry={geometry} material={material} />;
}

interface CameraControllerProps {
  focusTarget: number | null;
  portfolios: Portfolio[];
}

function CameraController({ focusTarget, portfolios }: CameraControllerProps) {
  const { camera, scene } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (focusTarget !== null) {
      const planetMesh = scene.getObjectByName(`planet-${focusTarget}`);
      if (planetMesh && controlsRef.current) {
        const position = new THREE.Vector3();
        planetMesh.getWorldPosition(position);

        const portfolio = portfolios.find((p) => p.id === focusTarget);
        if (portfolio) {
          const distance = portfolio.size * 8; // Reduzi o fator de distância
          position.x += distance;
          position.y += distance / 2;

          controlsRef.current.target.copy(position);
          camera.position.lerp(
            new THREE.Vector3(position.x + distance, position.y + distance, position.z + distance),
            0.1 // Suaviza a transição da câmera
          );
          controlsRef.current.update();
        }
      }
    }
  }, [focusTarget, camera, scene, portfolios]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      minDistance={20} // Adicionei distância mínima
      maxDistance={500} // Adicionei distância máxima
    />
  );
}

export default function Universe() {
  const [focusPlanetId, setFocusPlanetId] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-screen bg-black overflow-hidden">
      <div className="flex-1">
        <Canvas
          camera={{ position: [0, 40, 100], fov: 60 }} // Ajustei posição inicial da câmera
          gl={{ antialias: true }} // Adicionei antialiasing
        >
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.2} /> // Aumentei ligeiramente a luz ambiente
          <pointLight position={[0, 0, 0]} intensity={1.5} /> // Centralizei a luz no sol
          <BackgroundStars />
          <Sun />
          {portfolios.map((portfolio) => (
            <Planet key={portfolio.id} id={portfolio.id} name={portfolio.name} subdomain={portfolio.subdomain} description={portfolio.description} color={portfolio.color} size={portfolio.size} orbitRadius={portfolio.orbitRadius} orbitSpeed={portfolio.orbitSpeed} initialRotation={Math.random() * Math.PI * 2} />
          ))}
          <CameraController focusTarget={focusPlanetId} portfolios={portfolios} />
        </Canvas>
      </div>
    </div>
  );
}
