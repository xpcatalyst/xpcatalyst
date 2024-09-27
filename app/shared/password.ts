import { failure, success, type Result } from '@/shared'

export type Password = string

export const PASSWORD_ERRORS = {
  INVALID: 'Password must contain lowercase and uppercase letters, digits, and special characters',
  REQUIRED: 'Password is required',
  TOO_SHORT: 'Password must be at least 10 characters long',
  TOO_LONG: 'Password must not exceed 30 characters',
} as const

export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/

const isValid = (value: string): boolean => PASSWORD_PATTERN.test(value)

export const validatePassword = (value: string | null | undefined): Result<Password> => {
  if (!value) {
    return failure(PASSWORD_ERRORS.REQUIRED)
  }
  if (value.length < 10) {
    return failure(PASSWORD_ERRORS.TOO_SHORT)
  }
  if (value.length > 30) {
    return failure(PASSWORD_ERRORS.TOO_LONG)
  }
  if (!isValid(value)) {
    return failure(PASSWORD_ERRORS.INVALID)
  }
  return success(value as Password)
}
