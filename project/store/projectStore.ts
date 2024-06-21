import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Project } from '@/project';

export const useProjectStore = defineStore('projectStore', () => {
  // State
  const projects = ref<Project[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Actions
  const fetchProjects = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data, error: fetchError } = await useFetch<Project[]>('http://localhost:3001/projects');
      if (fetchError.value) {
        throw new Error(fetchError.value.message);
      }
      projects.value = data.value ?? [];
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`Caught an error: ${err.name}, ${err.message}`);
        error.value = err.message;
      } else {
        console.error("Caught an unknown error");
      }
    } finally {
      loading.value = false;
    }
  };

  const incrementStars = (projectId: number) => {
    const project = projects.value.find(p => p.id === projectId);
    if (project) {
      project.stars += 1;
    }
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    incrementStars,
  };
});
