import { defineStore } from 'pinia';
import { type Project } from '@/project';

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [] as Project[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProjects() {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await useFetch<Project[]>('http://localhost:3001/projects');
        if (error.value) {
          throw new Error(error.value.message);
        }
        this.projects = data.value ?? [];
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Caught an error: ${err.name}, ${err.message}`);
        } else {
          console.error("Caught an unknown error");
        }
      } finally {
        this.loading = false;
      }
    },
    incrementStars(projectId: number) {
      const project = this.projects.find(p => p.id === projectId);
      if (project) {
        project.stars += 1;
      }
    },
  },
});
