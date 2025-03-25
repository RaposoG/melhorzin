
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jusemarinho',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/josepaulomarinho/',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Dev.to',
      url: 'https://dev.to/iamjose',
      icon: <ExternalLink className="h-5 w-5" />
    }
  ];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover glass-card flex items-center justify-center p-3 text-muted-foreground hover:text-primary"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
