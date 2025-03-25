
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const year = new Date().getFullYear();
  const technologies = ["React", "TypeScript", "TailwindCSS", "Framer Motion", "ShadcnUI", "Vite"];
  
  return (
    <footer className={cn("w-full py-6 border-t", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <div className="font-mono">
            &copy; {year} José Paulo Marinho. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
