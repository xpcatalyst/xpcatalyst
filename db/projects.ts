import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sport School App',
    date_created: '2024-05-01',
    date_modified: '2024-10-12',
    version: 'v0.5',
    progress: 50,
    description: 'A platform to manage sports school registrations, notifications, and learning progress.',
  },
  {
    id: 2,
    title: 'Solidarity Grocery Management',
    date_created: '2024-04-15',
    date_modified: '2024-10-01',
    version: 'v1',
    progress: 75,
    description: 'Stock management system for a community-driven grocery project involving local producers.',
  },
  {
    id: 3,
    title: 'Deals for Devs',
    date_created: '2024-02-20',
    date_modified: '2024-09-30',
    version: 'v1',
    progress: 50,
    description: 'A curated platform for developer deals on courses, tools, and ebooks, with community contributions.',
  },
]