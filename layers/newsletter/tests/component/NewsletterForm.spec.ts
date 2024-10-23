// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NewsletterForm from '../../components/NewsletterForm.vue'

describe('NewsletterForm', () => {
  const wrapper = mount(NewsletterForm) // We need mount (or mountSuspended) instead of shallow mount to use Input, Button Shadcn elements

  const findForm = () => wrapper.find('[data-testid="newsletter-form"]')
  const findEmail = () => wrapper.find('[data-testid="newsletter-email"]')
  const findSubmitButton = () => wrapper.find('[data-testid="newsletter-submit"]')
  const findMessage = () => wrapper.find('[data-testid="newsletter-message"]')

  it('should render the form correctly', () => {
    expect(findForm().exists()).toBe(true)
    expect(findEmail().exists()).toBe(true)
    expect(findSubmitButton().exists()).toBe(true)
    expect(findMessage().exists()).toBe(true)
  })

  it('should disable the button when email field is empty and enables when filled', async () => {
    await findEmail().setValue('')
    expect(findSubmitButton().attributes('disabled')).toBe('') // disabled = true

    await findEmail().setValue('not empty')
    expect(findSubmitButton().attributes('disabled')).toBeUndefined() // disabled = false
  })
})

/*
4. `it('emits input event when email is typed')`
5. `it('emits submit event on button click')`
6. `it('disables submit button when "disabled" prop is true')`
7. `it('shows error message when "error" prop is passed')`
8. `it('shows loading spinner when "loading" prop is true')`
*/
