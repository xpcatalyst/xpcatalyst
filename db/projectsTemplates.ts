import { users } from './users'
import { projects } from './projects'
import { needs } from './needs'
import { contributions } from './contributions'
import type { ProjectTemplate } from './types'

const schoolAppProjectTemplate: ProjectTemplate = {
  id: 1,
  draft: false,
  pinned: true,
  approved: true,
  date_created: '2024-03-01',
  date_modified: '2024-10-05',
  version: 'v2',
  progress: 100,
  title: 'Sport School App',
  image: 'photo-1656331797721-b593b8f00297.jpeg',
  keywords: ['sport', 'school', 'management'],
  description: 'Digital services for managing a sports school',
  features: [
    'Registration management',
    'Notifications',
    'Online sales',
    'Learning tracking',
  ],
  authors: [users[0]],
  contributions: [contributions[0]],
  interested: [users[2]],
  source: null,
  problem: 'Difficulty tracking students’ progress and managing resources in a centralized way.',
  solution: 'A centralized platform for tracking registrations, managing courses, and improving communication with students. Add revenues, improve engagement, and increase subscriptions.',
  audience: ['School administrators', 'Instructors', 'Students', 'Parents', 'Alumni'],
  projects: [projects[0]],
  needs: [needs[0], needs[1]],
  analytics: null,
  documents: null,
}

const solidarityGroceryProjectTemplate: ProjectTemplate = {
  id: 2,
  draft: false,
  pinned: false,
  approved: true,
  date_created: '2024-04-15',
  date_modified: '2024-10-01',
  version: 'v1',
  progress: 75,
  title: 'Solidarity Grocery Management',
  image: 'photo-1655474396177-e727349f44dc.jpeg',
  keywords: ['grocery', 'inventory', 'local producers', 'solidarity'],
  description: 'A project to manage stock for a solidarity grocery store in collaboration with local producers.',
  features: [
    'Stock management',
    'Supplier coordination',
    'Real-time inventory updates',
    'Donation tracking',
  ],
  authors: [users[1]],
  contributions: [contributions[1]],
  interested: [users[3]],
  source: null,
  problem: 'Challenges with tracking stock levels, coordinating with suppliers, and managing donations in a reliable, centralized system.',
  solution: 'A system to streamline inventory, coordinate supplies with local producers, and improve stock visibility and management.',
  audience: ['Grocery managers', 'Local producers', 'Community organizers'],
  projects: [projects[1]],
  needs: [needs[2]],
  analytics: {
    views: 180,
    clicks: 75,
    actions: 12,
  },
  documents: null,
}

const dealsForDevsProjectTemplate: ProjectTemplate = {
  id: 3,
  draft: true,
  pinned: false,
  approved: true,
  date_created: '2024-02-20',
  date_modified: '2024-09-30',
  version: 'v0.3',
  progress: 30,
  title: 'Deals for Devs',
  image: 'photo-1655993810480-c15dccf9b3a0.jpeg',
  keywords: ['developer tools', 'deals', 'open-source', 'community'],
  description: 'A platform that curates the best deals for developers, including courses, ebooks, tools, and more. The project is open-source to allow the community to contribute and gain experience.',
  features: [
    'Deal curation for developers',
    'Community contributions',
    'Real-time deal notifications',
    'Developer-centric resources',
  ],
  authors: [users[4]],
  contributions: [contributions[2]],
  interested: [users[1], users[3]],
  source: 'https://github.com/deals-for-devs',
  problem: 'Finding quality, up-to-date deals for developers is challenging, and existing resources are often scattered.',
  solution: 'A centralized, community-curated platform offering the latest deals for developer resources, tools, and more.',
  audience: ['Developers', 'Community contributors', 'Tech learners'],
  projects: [projects[2]],
  needs: [needs[1], needs[3]],
  analytics: {
    views: 320,
    clicks: 150,
    actions: 25,
    users: 40,
  },
  documents: null,
}

export const projectsTemplates: ProjectTemplate[] = [
  schoolAppProjectTemplate,
  solidarityGroceryProjectTemplate,
  dealsForDevsProjectTemplate,
]