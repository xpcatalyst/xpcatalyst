import { describe, it, expect, vi } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import ProjectListCard from '../components/ProjectListCard.vue';
import ProjectLikes from '../components/ProjectLikes.vue';
import { type ProjectSummary } from '../types/project.types';

describe('ProjectListCard', () => { 
  const project: ProjectSummary = { 
    id: 1, 
    name: 'NAME', 
    description: 'DESCRIPTION', 
    like: 10, 
    workflow: "alpha", 
    stack: ['STACK1', 'STACK2'],
    image: "test.jpg"
  };

  it('Should render the details of the project', async () => {
    const wrapper = await mountSuspended(ProjectListCard, {
      props: { project },  
      global: { provide: { triggerLike: vi.fn()} }
    })

    expect(wrapper.text()).toContain('NAME');
    expect(wrapper.text()).toContain('DESCRIPTION');
    expect(wrapper.text()).toContain('Alpha');
    expect(wrapper.text()).toContain('STACK1');
    expect(wrapper.text()).toContain('STACK2');
  });
  it("Passes project likes and ID to ProjectLikes component", async () => {
    const wrapper = await mountSuspended(ProjectListCard, {
      props: { project },  
      global: { provide: { triggerLike: vi.fn()} }
    })
    const projectLikes = wrapper.findComponent(ProjectLikes)
    expect(projectLikes.props('likes')).toBe(10);
    expect(projectLikes.props('projectId')).toBe(1);
  })
})

    // Should render Badges for stack
    // Should link to a Project Page