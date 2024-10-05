import { describe, it, expect, beforeEach } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { LoginForm, USECASE_ERRORS } from '@@/layers/auth'

describe('LoginForm (Integration)', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = shallowMount(LoginForm)
  })

  const findForm = () => wrapper.find('[data-testid="login-form"]')
  const findEmailInput = () => wrapper.find('[data-testid="login-email"]')
  const findPasswordInput = () => wrapper.find('[data-testid="login-password"]')
  const findSubmitButton = () => wrapper.find('[data-testid="login-submit"]')
  const findError = () => wrapper.find('[data-testid="login-error"]')

  it('disables the submit button when form fields are empty and enables when filled', async () => {
    expect(findSubmitButton().attributes('disabled')).toBe('')

    await findEmailInput().setValue('test@example.com')
    expect(findSubmitButton().attributes('disabled')).toBe('')

    await findPasswordInput().setValue('password')
    expect(findSubmitButton().attributes('disabled')).toBeUndefined()

    await findEmailInput().setValue('')
    expect(findSubmitButton().attributes('disabled')).toBe('')
  })

  describe('when username and password are filled', () => {
    beforeEach(async () => {
      await findEmailInput().setValue('not-empty')
      await findPasswordInput().setValue('not-empty')
    })

    // it('enables the submit button', () => {
    //   expect(findSubmitButton().attributes('disabled')).toBeUndefined()
    // })

    describe('on form submit', () => {
      it('renders an error message on invalid credentials', async () => {
        expect(findError().exists()).toBe(false)

        await findForm().trigger('submit')

        expect(findError().exists()).toBe(true)
        expect(findError().text()).toBe(USECASE_ERRORS.INVALID_CREDENTIALS)
      })
    })
  })
})
