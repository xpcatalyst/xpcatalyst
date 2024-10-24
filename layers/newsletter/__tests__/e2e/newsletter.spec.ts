import { expect, test } from '@nuxt/test-utils/playwright'

test('newsletter page displays correctly', async ({ page, goto }) => {
  await goto('/newsletter', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading')).toContainText('newsletter', { ignoreCase: true })

  // Get references to form elements
  const emailInput = page.getByTestId('newsletter-email')
  const submitButton = page.getByTestId('newsletter-submit')
  const messageText = page.getByTestId('newsletter-message')

  // Test initial state
  await expect(submitButton).toBeDisabled()

  // Enter a valid email
  await emailInput.fill('user@example.com')
  await expect(submitButton).toBeEnabled()

  // Submit the form
  await submitButton.click()
  await expect(messageText).toContainText('thank you', { ignoreCase: true })
})
