import { type Result, failure, success } from '@/shared'

export type Email = string

export const EMAIL_ERRORS = {
  INVALID: 'Invalid email address format',
  REQUIRED: 'Email address is required',
  TOO_LONG: 'Email address must not exceed 100 characters',
} as const

// export const PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// export const PATTERN : RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/ // from mdn + fix

// http://data.iana.org/TLD/tlds-alpha-by-domain.txt
export const EMAIL_PATTERN = /^(?!.*\.\.)(?!.*\.$)(?!^\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,16}$/ // ok

// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
// export const PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const isValid = (value: string): boolean => EMAIL_PATTERN.test(value)

export const validateEmail = (value: string | null | undefined): Result<Email> => {
  if (!value) {
    return failure(EMAIL_ERRORS.REQUIRED)
  }
  if (value.length > 100) {
    return failure(EMAIL_ERRORS.TOO_LONG)
  }
  if (!isValid(value)) {
    return failure(EMAIL_ERRORS.INVALID)
  }
  return success(value as Email)
}
