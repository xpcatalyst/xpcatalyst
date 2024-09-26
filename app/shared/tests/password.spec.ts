import { describe, expect, it } from 'vitest'
import { createPassword, ERRORS } from '@/shared/password'
import { failure, success } from '@/shared/result'

describe('Password', () => {
  it('should return a success result for valid password', () => {
    const result = createPassword('ValidPassword1!')
    expect(result).toEqual(success('ValidPassword1!'))
  })

  it('should return failure when password is an empty string', () => {
    const result = createPassword('')
    expect(result).toEqual(failure(ERRORS.REQUIRED))
  })

  it('should return failure when password is null or undefined', () => {
    const resultNull = createPassword(null)
    const resultUndefined = createPassword(undefined)

    expect(resultNull).toEqual(failure(ERRORS.REQUIRED))
    expect(resultUndefined).toEqual(failure(ERRORS.REQUIRED))
  })

  it('should return failure when password is too short (less than 10 characters)', () => {
    const shortPassword = 'Pass1!'
    const result = createPassword(shortPassword)
    expect(result).toEqual(failure(ERRORS.TOO_SHORT))
  })

  it('should return failure when password exceeds 30 characters', () => {
    const longPassword = 'A'.repeat(31)
    const result = createPassword(longPassword)
    expect(result).toEqual(failure(ERRORS.TOO_LONG))
  })

  it('should return failure when password does not meet the pattern', () => {
    const invalidPassword = 'password123'
    const result = createPassword(invalidPassword)
    expect(result).toEqual(failure(ERRORS.INVALID))
  })
})
