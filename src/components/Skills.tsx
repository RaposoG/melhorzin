import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Server, 
  Database, 
  Monitor, 
  Cloud,
  Layers, 
  Cog, 
  Code,
  TerminalSquare
} from 'lucide-react';

// Import technology icons from react-icons
import { 
  FaJava, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaLinux, 
  FaGithub, 
  FaGitlab,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase
} from "react-icons/fa";

import { 
  SiSpringboot,
  SiCsharp, 
  SiDotnet, 
  SiTypescript, 
  SiNestjs,
  SiGoland,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiOracle,
  SiTailwindcss,
  SiFigma,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiJupyter,
  SiNginx,
  SiApache
} from "react-icons/si";

interface SkillsProps {
  className?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Apache Camel", icon: <SiApache /> },
        { name: "C#", icon: <SiCsharp /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "NodeJS/Typescript", icon: <FaNodeJs /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "GoLang", icon: <SiGoland /> }
      ]
    },
    {
      title: "Banco de Dados",
      icon: <Database className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "Redis", icon: <SiRedis /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
        { name: "CouchDB", icon: <FaDatabase /> },
        { name: "Oracle", icon: <SiOracle /> }
      ]
    },
    {
      title: "Frontend",
      icon: <Monitor className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "React.JS", icon: <FaReact /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Github", icon: <FaGithub /> },
        { name: "Gitlab", icon: <FaGitlab /> },
        { name: "RedHat Openshift", icon: <SiRedis /> }
      ]
    },
    {
      title: "Mensageria & Log",
      icon: <Layers className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "ELK", icon: <SiElasticsearch /> },
        { name: "RabbitMQ", icon: <SiRabbitmq /> },
        { name: "Kafka", icon: <SiApachekafka /> },
        { name: "BullMQ", icon: <SiRabbitmq /> }
      ]
    },
    {
      title: "Data Science & AI",
      icon: <Cog className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "RedHat Data Science Pipelines", icon: <SiRedis /> },
        { name: "RedHat Openshift AI", icon: <SiRedis /> },
        { name: "Juputer Notebook", icon: <SiJupyter /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <FaPython /> }
      ]
    },
    {
      title: "Metodologias & Testes",
      icon: <Code className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "TDD", icon: <Code size={16} /> },
        { name: "BDD", icon: <Code size={16} /> },
        { name: "SpecFlow", icon: <Code size={16} /> },
        { name: "Cucumber", icon: <Code size={16} /> }
      ]
    },
    {
      title: "Infraestrutura",
      icon: <TerminalSquare className="h-8 w-8 text-primary mb-3" />,
      skills: [
        { name: "usgwi", icon: <TerminalSquare size={16} /> },
        { name: "Nginx", icon: <SiNginx /> }
      ]
    }
  ];

  return (
    <section id="skills" className={cn("py-16 md:py-24 bg-accent/30", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 scroll-reveal">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Habilidades Técnicas
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="scroll-reveal skill-card flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-mono font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
