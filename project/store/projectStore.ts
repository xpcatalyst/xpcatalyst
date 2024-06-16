import { defineStore } from 'pinia';
import { type Project } from '@/project';

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [] as Project[],
  }),
  actions: {
    async fetchProjects() {
      const { data, error } = await useFetch<Project[]>('http://localhost:3001/projects');
      if (error.value) {
        console.error('Error fetching projects:', error.value);
        return;
      }
      this.projects = data.value ?? [];
    },
    incrementStars(projectId: number) {
      const project = this.projects.find(p => p.id === projectId);
      if (project) {
        project.stars += 1;
      }
    },
  },
});
