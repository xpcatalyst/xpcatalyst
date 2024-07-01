import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { ProjectListItem, StarButton, type ProjectSummary } from '..'

describe('ProjectListItem', () => {
  const project: ProjectSummary = { id: 1, name: 'NAME', description: 'DESCRIPTION', stars: 10, workflow: 'FLOW', stack: ['STACK1', 'STACK2']}

  it('Should render the details of the project', async () => {
    const wrapper = await mountSuspended(ProjectListItem, { props: { project }})
    expect(wrapper.text()).toContain('NAME');
    expect(wrapper.text()).toContain('DESCRIPTION');
    expect(wrapper.text()).toContain('10');
    expect(wrapper.text()).toContain('STACK1');
    expect(wrapper.text()).toContain('STACK2');
  });

  it('Should render a StarButton component', async () => {
    const wrapper = await mountSuspended(ProjectListItem, { props: { project }});
    const starButton = wrapper.findComponent(StarButton);
    expect(starButton.exists()).toBe(true);
    expect(starButton.text()).toContain(10);
})

  // Should render Badges for stack
  // Should not render the project badge component when absent in the project summary
  // Should call the composable's incrementStars function when the button is clicked
  // Should not call incrementStars when already starred
  // Should disable the button when isStarred is true
});