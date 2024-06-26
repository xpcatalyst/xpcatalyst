import { useProjectStore, PROJECTS_NB, type Project } from '@/project';

export const useProjects = () => {
  const projectStore = useProjectStore();

  const projects = computed(() => projectStore.projects);
  const loading = computed(() => projectStore.loading);
  const error = computed(() => projectStore.error);

  const fetchProjects = () => projectStore.fetchProjects();
  const incrementStars = (projectId: number) => projectStore.incrementStars(projectId);

  const displayedProjects = ref<Project[]>([]);
  const displayCount = ref(PROJECTS_NB);
  const hasMoreProjects = computed(() => projects.value.length > displayedProjects.value.length);

  const loadMoreProjects = () => {
    if (projects.value) {
      displayCount.value += PROJECTS_NB;
      displayedProjects.value = projects.value.slice(0, displayCount.value);
    }
  };

  if (projects.value.length) {
    displayedProjects.value = projects.value.slice(0, PROJECTS_NB);
  }

  return {
    projects,
    displayedProjects,
    loading,
    error,
    hasMoreProjects,
    fetchProjects,
    incrementStars,
    loadMoreProjects
  };
};
