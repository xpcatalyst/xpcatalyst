import { describe, expect, it } from 'vitest'
import { validateEmail, EMAIL_ERRORS, failure, success } from '@/shared'

describe('Email', () => {
  it('should return a success result for valid email', () => {
    const result = validateEmail('test@example.com')
    expect(result).toEqual(success('test@example.com'))
  })

  it('should return failure when email is a empty string', () => {
    const result = validateEmail('')
    expect(result).toEqual(failure(EMAIL_ERRORS.REQUIRED))
  })

  it('should return failure when email is null or undefined', () => {
    const resultNull = validateEmail(null)
    const resultUndefined = validateEmail(undefined)

    expect(resultNull).toEqual(failure(EMAIL_ERRORS.REQUIRED))
    expect(resultUndefined).toEqual(failure(EMAIL_ERRORS.REQUIRED))
  })

  it('should return failure with missing "@" symbol', () => {
    const result = validateEmail('userexample.com')
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  it('should return failure with multiple "@" symbols', () => {
    const result = validateEmail('user@@example.com') // user@domain@domain.com
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  it('should return failure with missing domain name', () => {
    const result = validateEmail('user@') // @example.com
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  describe('Invalid Characters', () => {
    const invalidEmails = [
      'user@ex@ample.com',
      'user!@example.com',
      'user#@example.com',
      'user$@example.com',
      'user%^&*@example.com',
    ]

    invalidEmails.forEach((email) => {
      it(`should return failure with invalid email: ${email}`, () => {
        const result = validateEmail(email)
        expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
      })
    })
  })

  describe('Leading or Trailing Spaces', () => {
    const spacedEmails = [
      ' user@example.com',
      'user@example.com ',
      ' user@ example.com ',
    ]

    spacedEmails.forEach((email) => {
      it(`should return failure with email containing spaces: '${email}'`, () => {
        const result = validateEmail(email)
        expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
      })
    })
  })

  describe('Consecutive Dots', () => {
    const consecutiveDotsEmails = [
      'user..name@example.com',
      'user@example..com',
    ]

    consecutiveDotsEmails.forEach((email) => {
      it(`should return failure with consecutive dots in email: ${email}`, () => {
        const result = validateEmail(email)
        expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
      })
    })
  })

  describe('Invalid TLD', () => {
    const invalidTLDEmails = [
      'user@example.c',
      'user@example.123',
      'user@example.com.',
      'user@example.aaaaaaaaaaaaaaaaa', // more than 16
    ]

    invalidTLDEmails.forEach((email) => {
      it(`should return failure with invalid TLD: ${email}`, () => {
        const result = validateEmail(email)
        expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
      })
    })
  })

  it('should return failure with non-ASCII email', () => {
    const result = validateEmail('用户@例子.广告')
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  it('should return failure with a too short email address', () => {
    const result = validateEmail('a@b.c') // This is valid but not a realistic use case
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  it('should return failure with an extremely long email address (> 100 characters)', () => {
    const longEmail = 'a'.repeat(89) + '@example.com'
    const result = validateEmail(longEmail)
    expect(result).toEqual(failure(EMAIL_ERRORS.TOO_LONG))
  })
  it('should return failure with invalid local part email: .user@example.com', () => {
    const result = validateEmail('.user@example.com') // don't work with 'user.@example.com'
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })
})

/*
// Invalid Characters: 'user@ex@ample.com', 'user!@example.com', 'user#@example.com', 'user$@example.com', 'user%^&*@example.com
// Leading or Trailing Spaces: ' user@example.com', 'user@example.com ', ' user@ example.com '
// Consecutive Dots: 'user..name@example.com', 'user@example..com'
// Invalid TLD (Top-Level Domain): 'user@example.c', 'user@example.123', 'user@example.com.'
// Non-ASCII Characters: '用户@例子.广告', 'utilisateur@exemple.com'
// Extremely Long Email Addresses: 'a@b.c'
// Missing Local Part: '@example.com'
// Invalid Local Part Format: '.user@example.com', 'user.@example.com'
*/
