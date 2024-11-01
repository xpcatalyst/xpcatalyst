export type User = {
  id: number
  firstName: string
  lastName: string
  role: 'Author' | 'Contributor' | 'Interested Party' | 'Potential User'
}

export type Need = {
  id: number
  value: 'review' | 'design' | 'development' | 'write'
  on: Array<'problem' | 'solution' | 'features' | 'mockup' | 'user interface' | 'inventory tracking' | 'notifications' | 'content' | 'deal descriptions' | 'all'>
}

export type Contribution = {
  id: number
  date: string // Date in ISO format (e.g., 'YYYY-MM-DD')
  user: User | undefined
  needs: Array<Need> | undefined
  description: string
}

export type Project = {
  id: number
  title: string
  date_created: string // Date in ISO format (e.g., 'YYYY-MM-DD')
  date_modified: string // Date in ISO format (e.g., 'YYYY-MM-DD')
  version: string
  progress: number // Percentage (0-100)
  description: string
}

export type ProjectTemplate = {
  id: number
  draft: boolean
  pinned: boolean
  approved: boolean
  date_created: string // Date in ISO format (e.g., 'YYYY-MM-DD')
  date_modified: string // Date in ISO format (e.g., 'YYYY-MM-DD')
  version: string
  progress: number // Percentage (0-100)
  title: string
  image: string | null
  keywords: string[]
  description: string
  features: string[]
  authors: (User | undefined)[] | undefined
  contributions: (Contribution | undefined)[] | undefined
  interested: (User | undefined)[] | undefined
  source: string | null
  problem: string
  solution: string
  audience: string[]
  projects: (Project | undefined)[] | undefined
  needs: (Need | undefined)[] | undefined
  analytics: null | {
    clicks?: number
    views?: number
    actions?: number
    users?: number
  }
  documents: null | Array<{ type: 'image' | 'link' | 'diagram', url: string }>
}
