import { type Result, failure, success } from '@/shared/result'

export type Email = string

export const ERRORS = {
  INVALID: 'Invalid email address',
  REQUIRED: 'Email is required',
  TOO_LONG: 'Email address exceeds maximum length of 100 characters',
} as const

// export const PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// export const PATTERN : RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/ // from mdn + fix

// http://data.iana.org/TLD/tlds-alpha-by-domain.txt
export const PATTERN = /^(?!.*\.\.)(?!.*\.$)(?!^\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,16}$/ // ok

// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
// export const PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const isValid = (value: string): boolean => PATTERN.test(value)

export const createEmail = (value: string | null | undefined): Result<Email> => {
  if (!value) {
    return failure(ERRORS.REQUIRED)
  }
  if (value.length > 100) {
    return failure(ERRORS.TOO_LONG)
  }
  if (!isValid(value)) {
    return failure(ERRORS.INVALID)
  }
  return success(value as Email)
}
