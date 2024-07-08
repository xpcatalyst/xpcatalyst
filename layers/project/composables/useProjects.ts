
import { type Project } from "../types/project.types"
export const useProjects = (initialProject: Project[]) => {

    const projects = ref<Project[]>(initialProject);
    const searchTerm = ref<string>('');

    const updateSearchTerm = (newTerm: string) => searchTerm.value = newTerm;

    const filteredProjects = computed(() => {
        if (!searchTerm.value) return projects.value;
        return projects.value.filter(project =>
          project.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });

    return {
        updateSearchTerm,
        filteredProjects,
    }
    
}