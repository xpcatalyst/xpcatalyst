import { describe, it, expect, beforeEach } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { LoginForm, USECASE_ERRORS } from '@@/layers/auth'

describe('LoginForm', () => {
  const wrapper: VueWrapper = shallowMount(LoginForm)

  // beforeEach(() => {
  //   wrapper = shallowMount(LoginForm)
  // })

  const findForm = () => wrapper.find('[data-testid="login-form"]')
  const findEmailInput = () => wrapper.find('[data-testid="login-email"]')
  const findPasswordInput = () => wrapper.find('[data-testid="login-password"]')
  const findSubmitButton = () => wrapper.find('[data-testid="login-submit"]')
  const findError = () => wrapper.find('[data-testid="login-error"]')
  it('renders the form by default', () => {
    expect(findForm().exists()).toBe(true)
    expect(findEmailInput().exists()).toBe(true)
    expect(findPasswordInput().exists()).toBe(true)
    expect(findSubmitButton().exists()).toBe(true)
    expect(findError().exists()).toBe(true)
  })

  it('renders `Submit` text on submit button', () => {
    expect(findSubmitButton().text()).toBe('Log In')
  })
  it('disables the submit button when username field is empty', async () => {
    await findEmailInput().setValue('')
    expect(findSubmitButton().attributes('disabled')).toBe('')
  })

  it('disables the submit button when password field is empty', async () => {
    await findPasswordInput().setValue('')
    expect(findSubmitButton().attributes('disabled')).toBe('')
  })

  describe('when username and password are filled', () => {
    beforeEach(async () => {
      await findEmailInput().setValue('test@test.com')
      await findPasswordInput().setValue('password')
    })

    it('enables the submit button', () => {
      expect(findSubmitButton().attributes('disabled')).toBeUndefined()
    })

    describe('on form submit', () => {
      describe('on error', () => {
        beforeEach(async () => {
          await findForm().trigger('submit')
        })
        it('renders an error message', () => {
          expect(findError().text()).toBe(USECASE_ERRORS.INVALID_CREDENTIALS)
        })
      })
    })
  })
})
