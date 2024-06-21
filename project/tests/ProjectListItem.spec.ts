import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { nextTick } from 'vue'
import { ProjectListItem, mockProjects, type ProjectSummary } from '@/project'

// Mock composable
const incrementStars = vi.fn();

vi.mock('@/project/composables/useProjects', () => ({
  useProjects: () => ({
    incrementStars,
  }),
}));

describe('ProjectListItem', () => {
  let project: ProjectSummary;

  beforeEach(() => {
    project = JSON.parse(JSON.stringify(mockProjects[0])); // Deep copy
    incrementStars.mockReset(); // Reset mock before each test
  });

  it('Should render the name and the description of the project', async () => {
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    expect(wrapper.text()).toContain(project.name);
    expect(wrapper.text()).toContain(project.description);
  });

  it("Should increment the star's number when a user clicks on it", async () => {
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    const starButton = wrapper.find('button[aria-label="star"]');
    await starButton.trigger('click');
    await nextTick();

    expect(incrementStars).toHaveBeenCalledWith(project.id);
    expect(incrementStars).toHaveBeenCalledTimes(1);
  });
});
