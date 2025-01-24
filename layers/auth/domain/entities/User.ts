import type { User as SupabaseUser } from '@supabase/supabase-js'

export type User = {
  id: string
  name: string
  email: string
  image: string // URL
}

export const createUser = (supabaseUser: SupabaseUser): User => {
  return {
    id: supabaseUser.id,
    name: supabaseUser.user_metadata?.full_name || '',
    email: supabaseUser.email || '',
    image: supabaseUser.user_metadata?.avatar_url || '',
  }
}
