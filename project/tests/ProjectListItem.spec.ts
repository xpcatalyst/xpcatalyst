import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { createTestingPinia } from '@pinia/testing'

import { type ProjectSummary, ProjectListItem, mockProjects, useProjectStore } from '@/project'

describe('ProjectListItem', () => {

  const project0 = JSON.parse(JSON.stringify(mockProjects[0])) as ProjectSummary; // Deep Copy

  it('Should display the name and the description of the project0', async () => {
    const wrapper = await mountSuspended(ProjectListItem, { 
      props: { project: project0 } }) // Needed for Icon module
    expect(wrapper.text()).toContain(project0.name)
    expect(wrapper.text()).toContain(project0.description)
  })

  it("Should increment the star's number for each project0 individually when a user clicks on it", async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })
    const projectStore = useProjectStore(pinia)
    projectStore.projects = mockProjects

    const wrapper = await mountSuspended(ProjectListItem, {
      props: { project: project0 },
      global: { plugins: [pinia] },
    })

    const starButton = wrapper.find('button[aria-label="star"]')
    await starButton.trigger('click')
    await nextTick() // Ensure DOM and reactive data fully update

    expect(projectStore.incrementStars).toHaveBeenCalledTimes(1)
    expect(projectStore.projects[0].stars).toBe(project0.stars + 1)
  });

  it.todo('Should open a new page for the project when you click on it')
})