"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <Card className="group overflow-hidden border-blue-800/30 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative h-48 overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <CardContent className="p-5">
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm text-gray-300">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-blue-900/20 text-blue-300">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Visit project</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
