import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createTestingPinia } from '@pinia/testing'

import { type ProjectSummary, ProjectListItem, mockProjects, useProjectStore } from '@/project'

describe('ProjectListItem', () => {
  let project0 : ProjectSummary;
  let pinia;
  let projectStore;

  const setupStoreAndWrapper = async () => {
    pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false,
    });
    projectStore = useProjectStore(pinia);
    projectStore.projects = mockProjects;

    const wrapper = await mountSuspended(ProjectListItem, {
      props: { project: project0 },
      global: { plugins: [pinia] },
    });

    return { wrapper, projectStore };
  };

  beforeEach(() => {
    project0 = JSON.parse(JSON.stringify(mockProjects[0])); // Deep copy
  });

  it('Should display the name and the description of the project0', async () => {
    const { wrapper } = await setupStoreAndWrapper();

    expect(wrapper.text()).toContain(project0.name);
    expect(wrapper.text()).toContain(project0.description);
  });

  it('Should call incrementStar only once when the star button is clicked multiple times rapidly', async () => {
    const { wrapper, projectStore } = await setupStoreAndWrapper();

    const starButton = wrapper.find('button[aria-label="star"]');

    // Simulate rapid multiple clicks
    await starButton.trigger('click');
    await starButton.trigger('click');
    await nextTick(); 
    await starButton.trigger('click');
    await nextTick();

    expect(projectStore.incrementStars).toHaveBeenCalledTimes(1);
  });

  it("Should increment the star's number for each project0 individually when a user clicks on it", async () => {
    const { wrapper, projectStore } = await setupStoreAndWrapper();

    const starButton = wrapper.find('button[aria-label="star"]');
    await starButton.trigger('click');
    await nextTick(); // Ensure DOM and reactive data fully update

    expect(projectStore.incrementStars).toHaveBeenCalledOnce();
    expect(projectStore.projects[0].stars).toBe(project0.stars + 1);
  });

  it.todo('Should open a new page for the project when you click on it');
});
