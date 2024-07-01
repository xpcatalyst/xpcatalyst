import { type Project } from '..';

export const useProjects = () => {
  const projects = ref<Project[]>([]);
 
  return {
    projects,
  };
};
