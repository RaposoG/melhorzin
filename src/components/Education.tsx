
import React from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  className?: string;
}

const Education: React.FC<EducationProps> = ({ className }) => {
  const educationData = [
    {
      period: "2020-2023",
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade"
    },
    {
      period: "2025",
      degree: "Pós Graduação em Inteligência Artificial",
      institution: "Instituição"
    }
  ];

  return (
    <section id="educacao" className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 scroll-reveal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Formação Acadêmica
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="pl-6 border-l-2 border-primary/30">
            {educationData.map((item, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-6 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                <div className="glass-card p-6 ml-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="mr-2 text-primary" />
                    <span className="font-semibold text-primary">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-mono font-bold mb-1">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
