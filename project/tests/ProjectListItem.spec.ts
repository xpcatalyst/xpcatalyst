import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { ProjectListItem, type ProjectSummary } from '@/project'


// Mock the composable's function
const incrementStars = vi.fn();

vi.mock('../composables/useProjects', () => ({
  useProjects: () => ({ incrementStars }),
}));


describe('ProjectListItem', () => {
  beforeEach(() => {
    incrementStars.mockReset();
  });

  it('Should render the name and the description of the project', async () => {
    const project = { name: 'NAME', description: 'DESCRIPTION' } as ProjectSummary;
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    expect(wrapper.text()).toContain('NAME');
    expect(wrapper.text()).toContain('DESCRIPTION');
  });

  it("Should call the composable star's function when a user clicks on it", async () => {
    const project = { id: 9 } as ProjectSummary;
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    const button = wrapper.find('button[aria-label="star"]');
    await button.trigger('click');

    expect(incrementStars).toHaveBeenCalledWith(9)

    const isStarred = (wrapper.vm as any).isStarred //internal state
    expect(isStarred.value).toBe(true)
  });

    it("Should not call the star's function when already starred", async () => {
      const project = { id: 9 } as ProjectSummary;
      const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

      const isStarred = (wrapper.vm as any).isStarred //internal state
      isStarred.value = true;

      const button = wrapper.find('button[aria-label="star"]');
      await button.trigger('click');

      expect(incrementStars).not.toHaveBeenCalled();
      //expect(button.attributes('disabled')).toBe('disabled');
      //expect(button.attributes('disabled')).toBe('true')
      //expect(button.classes()).toContain('text-green-500');
  });});




     // const isStarred = wrapper.vm.$data.isStarred;
    //  const isStarred = (wrapper.vm as any).isStarred //internal state
    //  expect(isStarred).toBe(true)