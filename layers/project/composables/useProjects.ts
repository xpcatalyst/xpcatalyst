
import { type Project } from "../types/project.types"
export const useProjects = (initialProject: Project[]) => {

    const projects = ref(initialProject);
    const searchTerm = ref('');
    const workflowFilter = ref('');

    const updateSearchTerm = (newTerm: string) => searchTerm.value = newTerm;
    const updateWorkflowFilter = (newWorkflow: string) => workflowFilter.value = newWorkflow;

    const filteredProjects = computed(() => {
        let filtered = projects.value;

        if(searchTerm.value) {
          filtered = projects.value.filter(project => {
            return project.name.toLowerCase().includes(searchTerm.value.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.value.toLowerCase())
          });
        }

        if(workflowFilter.value) {
          filtered = filtered.filter(project => project.workflow === workflowFilter.value);
        }

        return filtered;
      });

    return {
        updateSearchTerm,
        updateWorkflowFilter,
        filteredProjects,
    }
    
}