import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { createTestingPinia } from '@pinia/testing'

import { type ProjectSummary, ProjectListItem, mockProjects, useProjectStore } from '@/project'

describe('ProjectListItem', () => {

  const project = mockProjects[0] as ProjectSummary;

  it('Should display the name and the description of the project', async () => {
    const wrapper = await mountSuspended(ProjectListItem, { props: { project: project } }) // Needed for Icon module
    expect(wrapper.text()).toContain(project.name)
    expect(wrapper.text()).toContain(project.description)
  })

  it("Should increment the star's number when a user click on it", async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })
    // const pinia = createTestingPinia({ stubActions: false })
    const projectStore = useProjectStore(pinia)
    projectStore.stars = project.stars

    const wrapper = await mountSuspended(ProjectListItem, {
      props: { project },
      global: {
        plugins: [pinia],
      },
    })

    const starIcon = wrapper.find('button[aria-label="star"]')
    await starIcon.trigger('click')
    await nextTick()

    // expect(projectStore.stars).toBe(project.stars + 1)
    // // Check if the color of the star icon changed
    // expect(starIcon.classes()).toContain('text-yellow-500')


    expect(projectStore.stars).toBe(project.stars + 1)

  })
  it.todo('Should open a new page for the project when you click on it')
})