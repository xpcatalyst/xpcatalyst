import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime' // => Icon component which could be async

import { ProjectList, generateMockProjects, PROJECTS_NB, NO_PROJECTS_MESSAGE } from '@/project'

describe('ProjectList', () => {
  it('Should render correct number of project items when loading is false', async () => {
    const projects = generateMockProjects(5);
    const wrapper = await mountSuspended(ProjectList, { props: { projects, loading: false } });
    const projectItems = wrapper.findAll('[data-test="project-item"]');
    
    expect(projectItems.length).toBe(projects.length);
  });

  it('Should display N skeleton projects on loading state', async () => {
    const wrapper = await mountSuspended(ProjectList, { props: { loading: true }});
    const skeletonItems = wrapper.findAll('[data-test="project-skeleton"]');

    expect(skeletonItems.length).toBe(PROJECTS_NB);
  })

  it('Should display warning component with a message when no projects are specified', async () => {
    const wrapper = await mountSuspended(ProjectList);
    const warning = wrapper.find('[data-test="project-warning"]');

    expect(warning.exists()).toBe(true);
    expect(warning.text()).toContain(NO_PROJECTS_MESSAGE);
  });

  it('Should display display warning component with a message when the project array is empty', async () => {
    const wrapper = await mountSuspended(ProjectList, { props: { projects: [] } });
    const warning = wrapper.find('[data-test="project-warning"]');

    expect(warning.exists()).toBe(true);
    expect(warning.text()).toContain(NO_PROJECTS_MESSAGE)
  });
})