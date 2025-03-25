
import React from 'react';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ExperienceProps {
  className?: string;
}

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  logoUrl: string;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const experiences: ExperienceItem[] = [
    {
      period: "2024 - Atual",
      role: "Engenheiro de Software",
      company: "Banco Safra",
      description: "Desenvolvimento de soluções para o banco, utilizando tecnologias modernas e práticas de engenharia de software.",
      logoUrl: "/assets/70c5c783-2872-4767-ba39-e938c0c1f863.png"
    },
    {
      period: "2023 - 2024",
      role: "Analista Back End Microcrédito Prospera",
      company: "Santander",
      description: "Desenvolvimento e manutenção de sistemas para o programa de microcrédito Prospera.",
      logoUrl: "/assets/dd14aa49-e6a8-4b76-8731-5141ed66aa11.png"
    },
    {
      period: "2021 - 2023",
      role: "Desenvolvimento TI PIX",
      company: "Banco Safra",
      description: "Participação no desenvolvimento e implementação da solução PIX para o Banco Safra.",
      logoUrl: "/assets/70c5c783-2872-4767-ba39-e938c0c1f863.png"
    }
  ];

  return (
    <section id="experiencia" className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 scroll-reveal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Experiência Profissional
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="scroll-reveal timeline-item">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-sm font-semibold text-primary">{exp.period}</span>
                    <h3 className="text-xl font-mono font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <img 
                      src={exp.logoUrl} 
                      alt={exp.company}
                      className="h-12 object-contain" 
                    />
                  </div>
                </div>
                <Separator className="my-4" />
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
