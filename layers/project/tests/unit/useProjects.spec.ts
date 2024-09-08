import { describe, it, expect } from 'vitest'
import { useProjects } from '../../composables/useProjects'
import type { Project, SortOption } from '../../types/project.types'

describe('useProjects', () => {
  it('Should return the correct number of filtered projects based on name and description in lowercase', () => {
    const projects: Project[] = [
      { name: 'Redesign', description: 'Website redesign.' } as Project,
      { name: 'WEB App', description: 'Create web app.' } as Project,
    ]
    const { filteredProjects, updateSearchTerm } = useProjects(projects)

    // Ensure all projects are included at liketup
    expect(filteredProjects.value.length).toEqual(projects.length)

    // Should filter to only include projects with 'web' or 'design' in name or description
    updateSearchTerm('web')
    expect(filteredProjects.value.length).toEqual(2)

    updateSearchTerm('design')
    expect(filteredProjects.value.length).toEqual(1)
  })

  it('Should filter projects by workflow status', () => {
    const projects: Project[] = [
      { workflow: 'draft' } as Project,
      { workflow: 'draft' } as Project,
      { workflow: 'alpha' } as Project,
      { workflow: 'beta' } as Project,
    ]

    const { filteredProjects, updateWorkflowFilter } = useProjects(projects)

    updateWorkflowFilter('draft')
    expect(filteredProjects.value.length).toEqual(2)

    updateWorkflowFilter('alpha')
    expect(filteredProjects.value).toEqual([{ workflow: 'alpha' }])

    updateWorkflowFilter('')
    expect(filteredProjects.value).toEqual(projects)
  })

  it('Should return a list of workflow options', () => {
    const projects: Project[] = [
      { workflow: 'draft' } as Project,
      { workflow: 'draft' } as Project,
      { workflow: 'alpha' } as Project,
      { workflow: 'beta' } as Project,
    ]

    const { workflowOptions } = useProjects(projects)

    expect(workflowOptions.value.length).toEqual(3)
    expect(workflowOptions.value).toEqual([
      { value: 'draft', label: 'Draft', nb: 2 },
      { value: 'alpha', label: 'Alpha', nb: 1 },
      { value: 'beta', label: 'Beta', nb: 1 },
    ])
  })

  it('Should return a list of stack options', () => {
    const projects: Project[] = [
      { stack: ['React', 'Supabase'] } as Project,
      { stack: ['Vue', 'Supabase'] } as Project,
      { stack: ['Vue', 'Supabase'] } as Project,
    ]

    const { stackOptions } = useProjects(projects)

    expect(stackOptions.value.length).toEqual(3)
    expect(stackOptions.value).toEqual([
      { value: 'React', label: 'React', nb: 1 },
      { value: 'Supabase', label: 'Supabase', nb: 3 },
      { value: 'Vue', label: 'Vue', nb: 2 },
    ])
  })

  it('Should filter projects by stack', () => {
    const projects: Project[] = [
      { stack: ['React', 'Supabase'] } as Project,
      { stack: ['Vue', 'Supabase'] } as Project,
      { stack: ['Vue', 'Supabase'] } as Project,
    ]

    const { filteredProjects, updateStackFilter } = useProjects(projects)

    updateStackFilter(['Vue'])
    expect(filteredProjects.value.length).toEqual(2)

    updateStackFilter(['React'])
    expect(filteredProjects.value).toEqual([{ stack: ['React', 'Supabase'] }])

    updateStackFilter([])
    expect(filteredProjects.value).toEqual(projects)
  })

  it('Should sort projects by date', () => {
    const projects: Project[] = [
      { date: '2021-01-01' } as Project,
      { date: '2022-01-01' } as Project,
      { date: '2020-01-01' } as Project,
    ]
    const { sortedProjects, updateSort } = useProjects(projects)

    updateSort({ value: 'date', order: 'asc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { date: '2020-01-01' },
      { date: '2021-01-01' },
      { date: '2022-01-01' },
    ])

    updateSort({ value: 'date', order: 'desc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { date: '2022-01-01' },
      { date: '2021-01-01' },
      { date: '2020-01-01' },
    ])
  })

  it('Should sort projects by name', () => {
    const projects: Project[] = [
      { name: 'Project B' } as Project,
      { name: 'Project A' } as Project,
      { name: 'Project C' } as Project,
    ]
    const { sortedProjects, updateSort } = useProjects(projects)

    updateSort({ value: 'name', order: 'asc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { name: 'Project A' },
      { name: 'Project B' },
      { name: 'Project C' },
    ])

    updateSort({ value: 'name', order: 'desc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { name: 'Project C' },
      { name: 'Project B' },
      { name: 'Project A' },
    ])
  })

  it('Should sort projects by popularity', () => {
    const projects: Project[] = [
      { like: 1 } as Project,
      { like: 3 } as Project,
      { like: 2 } as Project,
    ]
    const { sortedProjects, updateSort } = useProjects(projects)

    updateSort({ value: 'like', order: 'asc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { like: 1 },
      { like: 2 },
      { like: 3 },
    ])

    updateSort({ value: 'like', order: 'desc' } as SortOption)
    expect(sortedProjects.value).toEqual([
      { like: 3 },
      { like: 2 },
      { like: 1 },
    ])
  })

  it('Should toggle the like count for the specified project', () => {
    const projects: Project[] = [
      { id: 1, name: 'Project 1', like: 0 } as Project,
      { id: 2, name: 'Project 2', like: 10 } as Project,
    ]
    const { triggerLike, sortedProjects } = useProjects(projects)

    triggerLike(1)
    expect(sortedProjects.value.find(p => p.id === 1)?.like).toBe(1)

    triggerLike(2)
    expect(sortedProjects.value.find(p => p.id === 2)?.like).toBe(11) // increment

    triggerLike(2)
    expect(sortedProjects.value.find(p => p.id === 2)?.like).toBe(10) // decrement
  })

  it('Should do nothing if project ID is not found', () => {
    const projects = [
      { id: 1, name: 'Project 1', like: 0 } as Project,
      { id: 2, name: 'Project 2', like: 1 } as Project,
    ]

    const { triggerLike, sortedProjects } = useProjects(projects)

    // Attempt to increment like for a non-existent project
    triggerLike(3)
    expect(sortedProjects.value.find(p => p.id === 1)?.like).toBe(0)
    expect(sortedProjects.value.find(p => p.id === 2)?.like).toBe(1)
  })
})
