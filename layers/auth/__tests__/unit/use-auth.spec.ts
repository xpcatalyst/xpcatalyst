// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest'
import { useAuth } from '../../composables/useAuth'

describe('useAuth', () => {
  it('should init loading and mounting states', () => {
    const { loading, isAuthenticated } = useAuth()

    expect(loading.value).toBe(true)
    expect(isAuthenticated.value).toBe(false)
  })
})
