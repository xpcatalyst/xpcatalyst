import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue'
import LoginForm from '@@/layers/auth/presentation/components/LoginForm.vue'
import { useLogin } from '@@/layers/auth/presentation/composables/useLogin'
import { BUTTON_TEXT } from '~~/layers/auth/presentation/constants'

vi.mock('@@/layers/auth/presentation/composables/useLogin', () => ({
  useLogin: vi.fn(),
}))

describe('LoginForm (Unit)', () => {
  let wrapper: VueWrapper

  const mockUseLogin = {
    email: ref(''),
    password: ref(''),
    loading: ref(false),
    error: ref(''),
    success: ref(false),
    isSubmitDisabled: ref(false),
    submitButtonText: ref(BUTTON_TEXT.LOGIN),
    login: vi.fn(),
  }

  beforeEach(() => {
    vi.mocked(useLogin).mockReturnValue(mockUseLogin)
    wrapper = shallowMount(LoginForm)
  })

  const findForm = () => wrapper.find('[data-testid="login-form"]')
  const findEmailInput = () => wrapper.find('[data-testid="login-email"]')
  const findPasswordInput = () => wrapper.find('[data-testid="login-password"]')
  const findSubmitButton = () => wrapper.find('[data-testid="login-submit"]')
  const findErrorMessage = () => wrapper.find('[data-testid="login-error"]')

  it('renders the form with all necessary elements', () => {
    expect(findForm().exists()).toBe(true)
    expect(findEmailInput().exists()).toBe(true)
    expect(findPasswordInput().exists()).toBe(true)
    expect(findSubmitButton().exists()).toBe(true)
  })

  it('sets required attribute on email and password inputs', () => {
    expect(findEmailInput().attributes('required')).toBeDefined()
    expect(findPasswordInput().attributes('required')).toBeDefined()
  })

  it('sets correct input types for email and password', () => {
    expect(findEmailInput().attributes('type')).toBe('email')
    expect(findPasswordInput().attributes('type')).toBe('password')
  })

  it('does not display error message when error is empty', () => {
    mockUseLogin.error.value = ''
    expect(findErrorMessage().exists()).toBe(false)
  })
  it('binds email input to the presenter', async () => {
    await findEmailInput().setValue('test@example.com')
    expect(mockUseLogin.email.value).toBe('test@example.com')
  })

  it('binds password input to the presenter', async () => {
    await findPasswordInput().setValue('password123')
    expect(mockUseLogin.password.value).toBe('password123')
  })

  it('disables submit button when isSubmitDisabled is true', async () => {
    mockUseLogin.isSubmitDisabled.value = true
    await nextTick()
    expect(findSubmitButton().attributes('disabled')).toBeDefined()
  })

  it('enables submit button when isSubmitDisabled is false', async () => {
    mockUseLogin.isSubmitDisabled.value = false
    await nextTick()
    expect(findSubmitButton().attributes('disabled')).toBeUndefined()
  })

  it('displays the correct button text', async () => {
    expect(findSubmitButton().text()).toBe(BUTTON_TEXT.LOGIN)

    mockUseLogin.submitButtonText.value = BUTTON_TEXT.LOADING
    await nextTick()
    expect(findSubmitButton().text()).toBe(BUTTON_TEXT.LOADING)
  })

  it('calls login method when form is submitted', async () => {
    await findForm().trigger('submit')
    expect(mockUseLogin.login).toHaveBeenCalled()
  })

  it('displays error message when present', async () => {
    expect(findErrorMessage().exists()).toBe(false)

    mockUseLogin.error.value = 'Invalid credentials'
    await nextTick()
    expect(findErrorMessage().exists()).toBe(true)
    expect(findErrorMessage().text()).toBe('Invalid credentials')
  })

  it('has proper accessibility attributes', () => {
    expect(findEmailInput().attributes('id')).toBe('email')
    expect(findPasswordInput().attributes('id')).toBe('password')
    expect(wrapper.find('label[for="email"]').exists()).toBe(true)
    expect(wrapper.find('label[for="password"]').exists()).toBe(true)
  })
})
