import { useState } from 'react';
import { FeaturedProject } from '@/src/components';
import { StyledFeaturedProjects } from './styles';
import { useProjects } from '@/src/data';

export const FeaturedProjects = () => {
  const [isHovered, setIsHovered] = useState('');
  const { projects } = useProjects();

  return (
    <StyledFeaturedProjects aria-label='featuredProjects'>
      {projects.map(item =>
        item.projects.map((project, index) => (
          <FeaturedProject
            key={index}
            project={project}
            onHover={setIsHovered}
            isHovered={project.title === isHovered}
          />
        ))
      )}
    </StyledFeaturedProjects>
  );
};
