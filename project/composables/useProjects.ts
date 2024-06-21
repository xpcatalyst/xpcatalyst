import { computed } from 'vue';
import { useProjectStore } from '@/project';

export const useProjects = () => {
  const projectStore = useProjectStore();

  const projects = computed(() => projectStore.projects);
  const loading = computed(() => projectStore.loading);
  const error = computed(() => projectStore.error);

  const fetchProjects = () => projectStore.fetchProjects();
  const incrementStars = (projectId: number) => projectStore.incrementStars(projectId);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    incrementStars,
  };
};
