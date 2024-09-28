import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createLoginUseCase, createInMemoryRepository } from '@@/layers/auth'
import LoginForm from '@@/layers/auth/presentation/components/LoginForm.vue'

describe('LoginForm', () => {
  const repository = createInMemoryRepository()
  const loginUseCase = createLoginUseCase(repository)

  let wrapper: ReturnType<typeof shallowMount>

  beforeEach(() => {
    // Factory
    wrapper = shallowMount(LoginForm, { props: { usecase: loginUseCase } })
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
  })

  //   it('submits the form with correct data', async () => {
  //     await wrapper.find('input[type="email"]').setValue('test@example.com')
  //     await wrapper.find('input[type="password"]').setValue('ValidPassword1!')
  //     await wrapper.find('form').trigger('submit')

//     // Check if the form submission was handled correctly
//     // You might need to wait for the next tick or use a custom matcher
//     // to check if the login function was called with the correct arguments
//   })
})
