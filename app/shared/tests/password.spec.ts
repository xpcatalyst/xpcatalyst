import { describe, expect, it } from 'vitest'
import { validatePassword, PASSWORD_ERRORS, failure, success } from '@/shared/'

describe('Password', () => {
  it('should return a success result for valid password', () => {
    const result = validatePassword('ValidPassword1!')
    expect(result).toEqual(success('ValidPassword1!'))
  })

  it('should return failure when password is an empty string', () => {
    const result = validatePassword('')
    expect(result).toEqual(failure(PASSWORD_ERRORS.REQUIRED))
  })

  it('should return failure when password is null or undefined', () => {
    const resultNull = validatePassword(null)
    const resultUndefined = validatePassword(undefined)

    expect(resultNull).toEqual(failure(PASSWORD_ERRORS.REQUIRED))
    expect(resultUndefined).toEqual(failure(PASSWORD_ERRORS.REQUIRED))
  })

  it('should return failure when password is too short (less than 10 characters)', () => {
    const shortPassword = 'Pass1!'
    const result = validatePassword(shortPassword)
    expect(result).toEqual(failure(PASSWORD_ERRORS.TOO_SHORT))
  })

  it('should return failure when password exceeds 30 characters', () => {
    const longPassword = 'A'.repeat(31)
    const result = validatePassword(longPassword)
    expect(result).toEqual(failure(PASSWORD_ERRORS.TOO_LONG))
  })

  it('should return failure when password does not meet the pattern', () => {
    const invalidPassword = 'password123'
    const result = validatePassword(invalidPassword)
    expect(result).toEqual(failure(PASSWORD_ERRORS.INVALID))
  })
})
