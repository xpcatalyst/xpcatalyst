// import createClient from '@nuxtjs/supabase'
import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import { createSubscriber, type Subscriber } from '../domain/entities/subscriber'
import { failure, success } from '~/shared/result'

import type { Database } from '~/types/database.types'

/*
const { data: restaurant } = await useAsyncData('restaurant', async () => {
  const { data } = await client.from('restaurants').select('name, location').eq('name', 'My Restaurant Name').single()

  return data
})
  */

export const ERRORS = {
  SUBSCRIBER_NOT_FOUND: 'Subscriber not found in the database',
  DATABASE_ERROR: 'A database error occurred',
  DUPLICATE_EMAIL: 'Email already exists in the database',
} as const

// export const useSupabaseClient2 = () => {
//   const config = useRuntimeConfig()
//   return createClient(config.public.supabaseKey, config.public.supabaseUrl)
// }

export const createSupabaseNewsletterRepository = (): INewsletterRepository => {
  const supabase = useSupabaseClient<Database>()

  const add = async (subscriber: Subscriber): Promise<Result<Subscriber>> => {
    try {
      // Check for existing subscriber
      const { data: existingSubscriber } = await supabase
        .from('subscriber')
        .select()
        .eq('email', subscriber.email)
        .single()

      if (existingSubscriber) {
        return failure(ERRORS.DUPLICATE_EMAIL)
      }

      // Insert new subscriber
      const { data, error } = await supabase
        .from('subscriber')
        .insert({ email: subscriber.email })
        .select()
        .single()

      if (error) {
        return failure(ERRORS.DATABASE_ERROR)
      }

      return success(createSubscriber(data.email, data.id, data.created_at))
    }
    catch (error) {
      if (error instanceof Error) console.log(error.message)
      return failure(ERRORS.DATABASE_ERROR)
    }
  }

  const getByEmail = async (email: Email): Promise<Result<Subscriber>> => {
    try {
      const { data, error } = await supabase
        .from('subscriber')
        .select()
        .eq('email', email)
        .single()

      if (error || !data) {
        return failure(ERRORS.SUBSCRIBER_NOT_FOUND)
      }

      return success(createSubscriber(data.email, data.id))
    }
    catch (error) {
      if (error instanceof Error) console.log(error.message)
      return failure(ERRORS.DATABASE_ERROR)
    }
  }

  return {
    add,
    getByEmail,
  }
}
