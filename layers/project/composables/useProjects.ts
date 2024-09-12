import type { Project, Workflow, Option, SortOption } from '../types/project.types'

function countWorkflows(projects: Project[]): Option[] {
  // Utilisation d'un objet pour compter les occurrences de chaque workflow
  const workflowCount: { [key in Workflow]?: number } = {}

  projects.forEach((project) => {
    const workflow = project.workflow
    if (workflowCount[workflow]) {
      workflowCount[workflow]++
    }
    else {
      workflowCount[workflow] = 1
    }
  })

  // Transformation de l'objet workflowCount en tableau d'objets Option
  const options: Option[] = (Object.keys(workflowCount) as Workflow[]).map(workflow => ({
    value: workflow,
    label: workflow.charAt(0).toUpperCase() + workflow.slice(1),
    nb: workflowCount[workflow] ?? 0, // évite undefined
  }))

  return options
}

function countStack(projects: Project[]): Option[] {
  const counts: { [key: string]: number } = {}

  projects.forEach((project) => {
    project.stack.forEach((tech) => {
      if (counts[tech]) {
        counts[tech]++
      }
      else {
        counts[tech] = 1
      }
    })
  })

  const result = Object.keys(counts).map(key => ({
    value: key,
    label: key,
    nb: counts[key] ?? 0,
  }))

  return result
}

export const useProjects = (initialProject: Project[]) => {
  const projects = ref(initialProject)
  const searchTerm = ref('')
  const workflowFilter = ref('')
  const stackFilter = ref<string[]>([])
  const sortOption = ref<SortOption>({ label: 'Date', value: 'date', order: 'desc' })
  const incrementedProjects = ref(new Set<number>())

  const updateSearchTerm = (newTerm: string) => searchTerm.value = newTerm
  const updateWorkflowFilter = (newWorkflow: string) => workflowFilter.value = newWorkflow
  const updateStackFilter = (newStack: string[]) => stackFilter.value = newStack
  const updateSort = (newSort: SortOption) => sortOption.value = newSort
  const getProject = (id: number) => filteredProjects.value.find((project: Project) => project.id === id)

  const filteredProjects = computed(() => {
    let filtered = projects.value

    if (searchTerm.value) {
      filtered = projects.value.filter((project) => {
        return project.name.toLowerCase().includes(searchTerm.value.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    }

    if (workflowFilter.value) {
      filtered = filtered.filter(project => project.workflow === workflowFilter.value)
    }

    if (stackFilter.value.length > 0) {
      filtered = filtered.filter(project =>
        project.stack?.some(stack => stackFilter.value.includes(stack)))
    }

    return filtered
  })

  const sortProjects = (projects: Project[], sortOption: SortOption) => {
    return projects.slice().sort((a, b) => {
      let result = 0

      if (sortOption.value === 'date') {
        result = new Date(a.date).getTime() - new Date(b.date).getTime()
      }
      else if (sortOption.value === 'like') {
        result = a.like - b.like
      }
      else if (sortOption.value === 'name') {
        result = a.name.localeCompare(b.name)
      }

      return sortOption.order === 'asc' ? result : -result
    })
  }

  const sortedProjects = computed(() => sortProjects(filteredProjects.value, sortOption.value))

  const workflowOptions = computed((): Option[] => {
    return countWorkflows(projects.value)
  })

  const stackOptions = computed((): Option[] => {
    return countStack(projects.value)
  })

  const triggerLike = (projectId: number) => {
    const project = projects.value.find(p => p.id === projectId)
    if (project) {
      if (!incrementedProjects.value.has(projectId)) {
        incrementedProjects.value.add(projectId)
        project.like = (project.like || 0) + 1
      }
      else {
        incrementedProjects.value.delete(projectId)
        project.like = project.like - 1
      }
    }
  }

  return {
    updateSearchTerm,
    updateWorkflowFilter,
    updateStackFilter,
    updateSort,
    triggerLike,
    getProject,
    filteredProjects,
    sortedProjects,
    workflowOptions,
    stackOptions,
  }
}
