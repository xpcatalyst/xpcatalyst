import { failure, success } from '~/shared/result'

export const EMAIL_ERRORS = {
  INVALID: 'Invalid email address',
  REQUIRED: 'Email address is required',
  TOO_LONG: 'Email address must not exceed 100 characters',
} as const

// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
// http://data.iana.org/TLD/tlds-alpha-by-domain.txt
const EMAIL_PATTERN = /^(?!.*\.\.)(?!.*\.$)(?!^\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/i

const isValid = (value: string): boolean => EMAIL_PATTERN.test(value)

export const createEmail = (value: string | null | undefined): Result<Email> => {
  if (!value) {
    return failure(EMAIL_ERRORS.REQUIRED)
  }
  if (value.length > 100) {
    return failure(EMAIL_ERRORS.TOO_LONG)
  }
  if (!isValid(value)) {
    return failure(EMAIL_ERRORS.INVALID)
  }
  return success(value)
}