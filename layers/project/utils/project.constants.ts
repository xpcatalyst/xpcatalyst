import type { SortOption } from '../types/project.types.js'

export const MESSAGE = {
  NO_PROJECTS: 'No projects found, please try again',
  NO_PROJECT: 'No project found, the page Id might not be valid',
  SEARCH_PLACEHOLDER: 'Search projects...',
}

export const SORT_OPTIONS: SortOption[] = [
  { value: 'date', label: 'Date', order: 'asc' },
  { value: 'date', label: 'Date', order: 'desc' },
  { value: 'like', label: 'Popularity', order: 'asc' },
  { value: 'like', label: 'Popularity', order: 'desc' },
  { value: 'name', label: 'Name', order: 'asc' },
  { value: 'name', label: 'Name', order: 'desc' },
]
