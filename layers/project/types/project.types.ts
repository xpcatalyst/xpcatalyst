export type Project = {
  id: number
  date: string
  image: string
  name: string
  description: string
  like: number
  pinned: boolean
  workflow: Workflow
  stack: string[]
}

export type User = {
  id: number
  name: string
  image: string
}

export type Workflow = 'draft' | 'public' | 'spec' | 'prototype' | 'challenge' | 'mvp' | 'beta' | 'alpha' | 'archives'

export type ProjectSummary = Omit<Project, 'date' | 'pinned'>

export type Option = {
  label: string
  value: string
  nb: number
}

export type SortOption = {
  label: 'Date' | 'Popularity' | 'Name'
  value: 'date' | 'like' | 'name'
  order: 'asc' | 'desc'
}
