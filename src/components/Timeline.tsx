
import React from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Briefcase, CalendarClock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelineProps {
  className?: string;
}

interface TimelineItem {
  type: 'education' | 'experience';
  period: string;
  title: string;
  institution: string;
  logo?: string;
}

const Timeline: React.FC<TimelineProps> = ({ className }) => {
  const timelineItems: TimelineItem[] = [
    {
      type: 'education',
      period: "2020-2023",
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade",
      logo: "/assets/sptech-logo.png"
    },
    {
      type: 'experience',
      period: "2021-2023",
      title: "Desenvolvimento TI PIX",
      institution: "Banco Safra",
      logo: "/assets/safra-logo.png"
    },
    {
      type: 'experience',
      period: "2023-2024",
      title: "Analista Back End Microcrédito Prospera",
      institution: "Santander",
      logo: "/assets/santander-logo.png"
    },
    {
      type: 'education',
      period: "2025",
      title: "Cursando Pós Graduação em Inteligência Artificial",
      institution: "Instituição",
      logo: "/assets/fiap-logo.png"
    },
    {
      type: 'experience',
      period: "2024-Atual",
      title: "Engenheiro de Software",
      institution: "Banco Safra",
      logo: "/assets/safra-logo.png"
    }
  ];

  // Sort timeline items chronologically
  const sortedTimelineItems = [...timelineItems].sort((a, b) => {
    const yearA = parseInt(a.period.split('-')[0]);
    const yearB = parseInt(b.period.split('-')[0]);
    return yearA - yearB;
  });

  return (
    <section id="timeline" className={cn("py-16 md:py-24 bg-gradient-to-b from-background to-accent/20", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Trajetória
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {sortedTimelineItems.map((item, index) => (
              <div 
                key={index} 
                className="animate-fade-in bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary self-start">
                    {item.type === 'education' ? (
                      <GraduationCap className="h-5 w-5" />
                    ) : (
                      <Briefcase className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-mono font-bold break-words">{item.title}</h3>
                      
                      <div className="flex items-center gap-1">
                        <CalendarClock className="h-3 w-3 text-primary/60" />
                        <span className="font-mono text-xs font-medium text-primary/80">{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                        <Badge 
                          variant="outline" 
                          className="mt-2 text-xs bg-primary/5 text-primary border-primary/20"
                        >
                          {item.type === 'education' ? 'Educação' : 'Experiência'}
                        </Badge>
                      </div>
                      
                      {item.logo && (
                        <img 
                          src={item.logo} 
                          alt={item.institution}
                          className="h-8 object-contain mt-2 sm:mt-0" 
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
