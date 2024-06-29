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

  it("Should call the composable's incrementStars function when the button is clicked", async () => {
    const project = { id: 9 } as ProjectSummary;
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    const button = wrapper.find('button[aria-label="star"]');
    await button.trigger('click');

    expect(incrementStars).toHaveBeenCalledWith(9);

    const isStarred = (wrapper.vm as any).isStarred; //internal state
    expect(isStarred.value).toBe(true);
  });

  it("Should not call incrementStars when already starred", async () => {
    const project = { id: 9 } as ProjectSummary;
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    const isStarred = (wrapper.vm as any).isStarred;
    isStarred.value = true;

    const button = wrapper.find('button[aria-label="star"]');
    await button.trigger('click');

    expect(incrementStars).not.toHaveBeenCalled();
  });

  it('Should disable the button when isStarred is true', async () => {
    const project = { id: 9 } as ProjectSummary;
    const wrapper = await mountSuspended(ProjectListItem, { props: { project } });

    const button = wrapper.find('button[aria-label="star"]');

    // Initially, the button should not be disabled
    expect(button.attributes('disabled')).toBeUndefined();

    await button.trigger('click');

    // After clicking, the button should be disabled
    expect(button.attributes('disabled')).toBeDefined(); // or .toBe('')
  });

});