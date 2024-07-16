
import { type Project, type Workflow, type Option } from "../types/project.types"

function countWorkflows(projects: Project[]): Option[] {
  // Utilisation d'un objet pour compter les occurrences de chaque workflow
  const workflowCount: { [key in Workflow]?: number } = {};

  projects.forEach(project => {
      const workflow = project.workflow;
      if (workflowCount[workflow]) {
          workflowCount[workflow]++;
      } else {
          workflowCount[workflow] = 1;
      }
  });

  // Transformation de l'objet workflowCount en tableau d'objets Option
  const options: Option[] = (Object.keys(workflowCount) as Workflow[]).map(workflow => ({
      label: workflow,
      nb: workflowCount[workflow] ?? 0 // évite undefined
  }));

  return options;
}


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

    const workflowOptions = computed(() : Option[] => {
      return countWorkflows(projects.value)
    })

    return {
        updateSearchTerm,
        updateWorkflowFilter,
        filteredProjects,
        workflowOptions
    }
    
}