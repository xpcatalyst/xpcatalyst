import type { Need } from './types'

export const needs: Need[] = [
  {
    id: 1,
    value: 'review',
    on: ['solution', 'features'],
  },
  {
    id: 2,
    value: 'design',
    on: ['mockup', 'user interface'],
  },
  {
    id: 3,
    value: 'development',
    on: ['inventory tracking', 'notifications'],
  },
  {
    id: 4,
    value: 'write',
    on: ['content', 'deal descriptions'],
  },
]
