export type Subscriber = {
  id?: string
  email: Email
  name?: string
}

// Assume that the inputs it receives are valid?
// Don't perform email validation with createEmail(email)
export const createSubscriber = (email: Email, id?: string, name?: string): Subscriber => {
  return { id, email, name } as Subscriber
}
