import { failure, success, validateEmail, validatePassword, type Email, type Password, type Result } from '@/shared'

export type Credentials = {
  email: Email
  password: Password
}

export const CREDENTIALS_ERRORS = {
  REQUIRED: 'Required credentials',
} as const

export const validateCredentials = (value: Credentials | null | undefined): Result<Credentials> => {
  if (!value) {
    return failure(CREDENTIALS_ERRORS.REQUIRED)
  }

  const email = validateEmail(value.email)
  if (!email.success) {
    return email
  }

  const password = validatePassword(value.password)
  if (!password.success) {
    return password
  }

  return success({ email: email.value, password: password.value })
}
