import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, it, expect } from 'vitest'
import { mockProjects } from '../../utils/project.mock'

const project = mockProjects[0]

describe('(e2e) ProjectPageId', async () => {
  await setup({})

  it.skip('Should render a h1 with the name of the project', async () => {
    const page = await createPage(`/project/${project?.id}`)
    const h1 = await page.locator('h1').textContent()
    expect(h1).toBe(project?.name)
  })

  it.skip('Should render an error message when the project Id is invalid', async () => {
    const page = await createPage('/project/9999999')
    const h1 = await page.locator('h1').textContent()
    const p = await page.locator('p').textContent()
    expect(h1).toBe('No project')
    expect(p).toBe(MESSAGE.NO_PROJECT)
  })
})
