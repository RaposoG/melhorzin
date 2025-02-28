import type { Project } from '@/src/@types';

export type Projects = {
  year: string;
  projects: Project[];
}[];

export const getTotalProjects = (all: Projects) => {
  let total = 0;

  all.map(year => {
    total += year.projects.length;
  });

  return total;
};
