import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { type Project, mockProjects, ProjectList, PROJECTS_NB, NO_PROJECTS_MESSAGE } from '@/project'

describe('ProjectList', () => {
  const projects = mockProjects as Project[]

  // mountSuspended is used because of the Icon component which could be async
  it('Should render the correct number of project items', async () => {
    const projects = mockProjects as Project[]
    const wrapper = await mountSuspended(ProjectList, { props: { projects: projects } })
    const projectItems = wrapper.findAll('[data-test="project-item"]')
    expect(projectItems.length).toBe(mockProjects.length)
  })

  it('Should display a message when no projects are available', async () => {
    const wrapperWithEmptyProject = await mountSuspended(ProjectList, { props: { projects: [] } })
    expect(wrapperWithEmptyProject.text()).toContain(NO_PROJECTS_MESSAGE)

    const wrapperWithNoProps = mount(ProjectList)
    expect(wrapperWithNoProps.text()).toContain(NO_PROJECTS_MESSAGE)
  })

  it('Should render Alert component with variant "warning" when no projects are present', async () => {
    const wrapper = await mountSuspended(ProjectList, {
      props: { projects: [] }
    })
    const alert = wrapper.find('[data-test="alert-warning"]')
    expect(alert.exists()).toBe(true)
    expect(alert.text()).toContain(NO_PROJECTS_MESSAGE)
  })

  it('Should not render Alert component when projects are present', async () => {
    const wrapper = await mountSuspended(ProjectList, {
      props: { projects }
    })
    const alert = wrapper.find('[data-test="alert-warning"]')
    expect(alert.exists()).toBe(false)
  })

  it('Should display N skeleton projects on loading state', async () => {
    const wrapper = await mountSuspended(ProjectList, { props: { projects: [], loading: true } })
    const skeletonItems = wrapper.findAll('[data-test="skeleton-project-item"]')
    expect(skeletonItems.length).toBe(PROJECTS_NB)
  })
  it('Should display N projects at initialization', async () => {
    const wrapper = await mountSuspended(ProjectList, { props: { projects } });
    // await nextTick();
    // await wrapper.vm.$nextTick();
    const projectItems = wrapper.findAll('[data-test="project-item"]');
    expect(projectItems.length).toBe(PROJECTS_NB);
  });

  it.skip('Should display more projects when "Load More" button is clicked', async () => {
    // const projects = Array(PROJECTS_NB * 2).fill().map((_, index) => ({
    //   id: index + 1,
    //   name: `Project ${index + 1}`,
    // }));

    const wrapper = await mountSuspended(ProjectList, { props: { projects } });
    await wrapper.find('[data-test="load-more-button"]').trigger('click');

    const projectItems = wrapper.findAll('[data-test="project-item"]');
    expect(projectItems.length).toBe(PROJECTS_NB * 2);
  });
})