export type Subscriber = {
  id?: string
  email: Email
  created_at: string
}

// Assume that the inputs it receives are valid?
// Don't perform email validation with createEmail(email)
export const createSubscriber = (email: Email, id?: string, created_at?: string): Subscriber => {
  return { id, email, created_at } as Subscriber
}
