import { failure, success, type Result } from '@/shared/result'

export type Password = string

export const ERRORS = {
  INVALID: 'Password must be at least 10 characters long and contain lowercase, uppercase letters, digits, and special character.',
  REQUIRED: 'Password is required.',
  TOO_SHORT: 'Password must be at least 10 characters long.',
  TOO_LONG: 'Password cannot exceed 30 characters.',
} as const

export const PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/

export const isValid = (value: string): boolean => PATTERN.test(value)

export const createPassword = (value: string | null | undefined): Result<Password> => {
  if (!value) {
    return failure(ERRORS.REQUIRED)
  }
  if (value.length < 10) {
    return failure(ERRORS.TOO_SHORT)
  }
  if (value.length > 30) {
    return failure(ERRORS.TOO_LONG)
  }
  if (!isValid(value)) {
    return failure(ERRORS.INVALID)
  }
  return success(value as Password)
}
