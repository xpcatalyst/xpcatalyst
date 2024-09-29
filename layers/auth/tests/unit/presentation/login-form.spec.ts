import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import LoginForm from '@@/layers/auth/presentation/components/LoginForm.vue'

// Mock login use case
const mockLoginUseCase = {
  execute: vi.fn(),
}

describe('LoginForm', () => {
  let wrapper: ReturnType<typeof shallowMount>

  beforeEach(() => {
    // Reset mock before each test
    vi.resetAllMocks()

    // Component factory
    wrapper = shallowMount(LoginForm, { props: { usecase: mockLoginUseCase } })
  })

  // Helper selectors
  const findForm = () => wrapper.find('[data-test=login-form]')
  const findEmailInput = () => wrapper.find('[data-test=login-email-input]')
  const findPasswordInput = () => wrapper.find('[data-test=login-password-input]')
  const findSubmitButton = () => wrapper.find('[data-test=login-submit-button]')

  it('should contains correct input elements', async () => {
    expect(findForm().exists()).toBe(true)
    expect(findEmailInput().exists()).toBe(true)
    expect(findPasswordInput().exists()).toBe(true)
    expect(findSubmitButton().exists()).toBe(true)
    expect(findSubmitButton().attributes('disabled')).toBe('')
  })

  it('should disable the submit button when email field is empty', async () => {
    await findPasswordInput().setValue('password')
    expect(findSubmitButton().attributes('disabled')).toBe('') // Disable true
  })

  it('should disable the submit button when password field is empty', async () => {
    await findEmailInput().setValue('test@example.com')
    expect(findSubmitButton().attributes('disabled')).toBe('')
  })

  describe('when email and password are provided', () => {
    beforeEach(async () => {
      await findEmailInput().setValue('test@example.com')
      await findPasswordInput().setValue('password')
    })

    it('should enable the submit button', () => {
      expect(findSubmitButton().attributes('disabled')).toBeUndefined() // Disabled false
    })

    describe('on form submit', () => {
      it('should call the login use case', async () => {
        await findSubmitButton().trigger('submit')
        expect(mockLoginUseCase.execute).toHaveBeenCalledWith({
          email: 'test@example.com',
          password: 'password',
        })
      })
    })
  })
})

/*
        // mockLoginUseCase.execute.mockResolvedValue({ success: true, value: { id: '1', email: 'test@example.com' } })

      it('should handle login failure', async () => {
        mockLoginUseCase.execute.mockResolvedValue({ success: false, error: 'Invalid credentials' })
        await findSubmitButton().trigger('submit')
        // Add expectations for failure scenario (e.g., error message displayed)
      })

      it('should handle login error', async () => {
        // mockLoginUseCase.execute.mockRejectedValue(new Error('Network error'))
        await findSubmitButton().trigger('submit')
        // Add expectations for error scenario
      })
    })
  })

  it('should disable submit button when loading', async () => {
    await findEmailInput().setValue('test@example.com')
    await findPasswordInput().setValue('password')

    let resolveLogin: (value: unknown) => void
    mockLoginUseCase.execute.mockImplementation(() => new Promise((resolve) => { resolveLogin = resolve }))

    await findSubmitButton().trigger('submit')
    await wrapper.vm.$nextTick()

    expect(findSubmitButton().attributes('disabled')).toBe('')

    resolveLogin!({ success: true, value: { id: '1', email: 'test@example.com' } })
    await wrapper.vm.$nextTick()

    expect(findSubmitButton().attributes('disabled')).toBeUndefined()
  })

  */
