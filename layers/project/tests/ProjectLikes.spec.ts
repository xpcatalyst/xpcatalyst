import { describe, it, expect, vi } from 'vitest';
import ProjectLikes from '../components/ProjectLikes.vue'; 
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('ProjectLikes', () => {
  it('should render with the correct initial state', async () => {
    const wrapper = await mountSuspended(ProjectLikes, {
      props: { likes:10, projectId:1 },  
      global: { provide: { triggerLike: vi.fn()} }
    })
    
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('span[data-test="project-likes"]').text()).toBe('10');
    
    //const iconComponent = wrapper.findComponent({ name: 'Icon' });
    //expect(iconComponent.exists()).toBe(true);
  });

  it('should call triggerLike when the button is clicked', async () => {
    const triggerLike = vi.fn();
    const wrapper = await mountSuspended(ProjectLikes, {
      props: { likes:10, projectId:1 },  
      global: { provide: { triggerLike } }
    })
    
    const button = wrapper.find('button');
    await button.trigger('mousedown');
    expect(triggerLike).toHaveBeenCalledWith(1);
  });
});
