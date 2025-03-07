"use client";

import { useState, useEffect } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

interface PlanetSidebarProps {
  portfolios: Portfolio[];
  onSelectPlanet: (id: number | null) => void;
}

export function PlanetSidebar({ portfolios, onSelectPlanet }: PlanetSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Função para abrir o site quando clicar no card
  const openSite = (subdomain: string) => {
    window.open(`https://${subdomain}.melhorzin.com`, "_blank");
  };

  return (
    <div className={cn("h-full bg-black/80 text-white backdrop-blur-lg transition-all duration-300 border-r border-white/10 relative", isOpen ? "w-80" : "w-0")}>
      {/* Botão para expandir quando a barra estiver recolhida */}
      {!isOpen && (
        <Button variant="outline" size="icon" className="absolute -right-10 top-4 bg-black/80 border border-white/20" onClick={() => setIsOpen(true)}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}

      <div className={cn("flex h-full flex-col", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className="flex items-center justify-between p-4">
          <h2 className="font-bold text-xl">Planetas</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="relative">
                <Card className={cn("bg-black/60 border border-white/20 hover:border-white/40 cursor-pointer transition-all p-2", hoveredCard === portfolio.id ? "scale-105" : "scale-100")} onClick={() => openSite(portfolio.subdomain)} onMouseEnter={() => setHoveredCard(portfolio.id)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="flex flex-col">
                    {/* Preview do site */}
                    <div className="w-full h-32 mb-2 overflow-hidden rounded-md bg-gray-800 relative">
                      <div className="w-full h-full absolute inset-0" style={{ backgroundColor: portfolio.color, opacity: 0.3 }} />
                      <iframe src={`https://${portfolio.subdomain}.melhorzin.com`} className="w-full h-full transform scale-50 origin-top-left opacity-80" title={`Preview de ${portfolio.name}`} sandbox="allow-same-origin" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-md">{portfolio.name}</CardTitle>
                        <CardDescription className="text-xs truncate text-white/70">{portfolio.description}</CardDescription>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/50" />
                    </div>
                  </div>
                </Card>

                {/* Preview ampliado ao passar o mouse */}
                {hoveredCard === portfolio.id && (
                  <div className="absolute left-full top-0 ml-4 z-50 w-[400px] bg-black/90 border border-white/20 rounded-lg p-4 shadow-xl">
                    <div className="w-full h-64 mb-4 overflow-hidden rounded-md">
                      <iframe src={`https://${portfolio.subdomain}.melhorzin.com`} className="w-full h-full" title={`Preview ampliado de ${portfolio.name}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{portfolio.name}</h3>
                    <p className="text-sm text-white/80">{portfolio.description}</p>
                    <Button
                      className="mt-4 w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        openSite(portfolio.subdomain);
                      }}
                    >
                      Visitar Site
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
