import type { Email } from '@/shared'

export type User = {
  id: string
  email: Email
  name?: string
  created_at?: string
  updated_at?: string
}
