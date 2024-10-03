import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { LoginForm } from '@@/layers/auth'

describe('LoginForm', () => {
  const wrapper = shallowMount(LoginForm)

  const findForm = () => wrapper.find('[data-testid="login-form"]')
  const findEmailInput = () => wrapper.find('[data-testid="login-email"]')
  const findPasswordInput = () => wrapper.find('[data-testid="login-password"]')
  const findSubmitButton = () => wrapper.find('[data-testid="login-submit"]')

  it('renders the form by default', () => {
    expect(findForm().exists()).toBe(true)
    expect(findEmailInput().exists()).toBe(true)
    expect(findPasswordInput().exists()).toBe(true)
    expect(findSubmitButton().exists()).toBe(true)
  })
  it('renders `Submit` text on submit button', () => {
    expect(findSubmitButton().text()).toBe('Log In')
  })
  it.todo('should constraint input fields to email and password with Shared pattern', () => {})
  it.todo('disables the submit button when username field is empty', async () => {})
  it.todo('disables the submit button when password field is empty', async () => {})
  describe('when username and password are filled', () => {
    it.todo('enables the submit button', () => {})

    describe('on form submit', () => {
      it.todo('calls the API', () => {})

      describe('when loading', () => {
        it.todo('renders a `Loading...` text on the button', () => {})
        it.todo('does not render an error', () => {})
      })

      describe('on success', () => {
        it.todo('renders welcome text', () => {})
        it.todo('does not render form', () => {})
        it.todo('does not render an error message', () => {})
      })

      describe('on error', () => {
        it.todo('renders a `Submit` text on the button', () => {})
        it.todo('does not render welcome text', () => {})
        it.todo('renders a form', () => {})
        it.todo('renders an error message', () => {})
      })
    })
  })
})
