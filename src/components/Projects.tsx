
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects: Project[] = [
    {
      title: "Locket Letter",
      description: "Uma plataforma para envio e recebimento de cartas virtuais personalizadas.",
      link: "https://www.locketletter.com/",
      technologies: ["React", "NestJS", "MySQL", "Redis", "Hostinger", "Stripe"],
      image: "/assets/a6fc64a8-6cba-4c74-a92f-f6bc3a99ad12.png"
    },
    {
      title: "Issonura Team",
      description: "Site para time de tênis de mesa, com apresentação de membros e conquistas.",
      link: "https://issonurateam.com/home",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/assets/ce5cbe02-5b4b-4560-8494-f7ae6239da81.png"
    },
    {
      title: "Clube Tamoios",
      description: "Site institucional para o Clube de Desbravadores Tamoios, organização juvenil.",
      link: "https://www.clubetamoios.com.br/",
      technologies: ["React", "Shadcn", "Tailwind CSS"],
      image: "/assets/6da0b673-69f6-4d99-a801-160e7b7294b6.png"
    }
  ];

  return (
    <section id="projetos" className={cn("py-16 md:py-24 bg-accent/30", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 scroll-reveal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Projetos
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="scroll-reveal overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-mono">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Visitar projeto
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
