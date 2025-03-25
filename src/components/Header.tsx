
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-6 animate-fade-in", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-mono font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              José Marinho
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#sobre" className="animated-link">Sobre</a>
            <a href="#timeline" className="animated-link">Trajetória</a>
            <a href="#skills" className="animated-link">Habilidades</a>
            <a href="#projetos" className="animated-link">Projetos</a>
            <a href="#contato" className="animated-link">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
