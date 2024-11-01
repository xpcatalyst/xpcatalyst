import { users } from './users'
import { needs } from './needs'
import type { Contribution } from './types'

export const contributions: Contribution[] = [
  {
    id: 1,
    date: '2024-07-01',
    user: users[1],
    needs: [needs[0]],
    description: 'Added world champions to the participant list.',
  },
  {
    id: 2,
    date: '2024-06-15',
    user: users[2],
    needs: [needs[1]],
    description: 'Created initial wireframe for the stock management dashboard.',
  },
  {
    id: 3,
    date: '2024-09-10',
    user: users[4],
    needs: [needs[3]],
    description: 'Set up developer resources and initiated content curation.',
  },
]
