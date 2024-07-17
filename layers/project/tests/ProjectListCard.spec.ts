import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import ProjectListCard from '../components/ProjectListCard.vue';
import { type ProjectSummary } from '../types/project.types';

describe('ProjectListCard', () => { 
    const project: ProjectSummary = { id: 1, name: 'NAME', description: 'DESCRIPTION', stars: 10, workflow: "alpha", stack: ['STACK1', 'STACK2']}

    it('Should render the details of the project', async () => {
      const wrapper = await mountSuspended(ProjectListCard, { props: { project }})
      expect(wrapper.text()).toContain('NAME');
      expect(wrapper.text()).toContain('DESCRIPTION');
      expect(wrapper.text()).toContain('10');
      expect(wrapper.text()).toContain('alpha');
      expect(wrapper.text()).toContain('STACK1');
      expect(wrapper.text()).toContain('STACK2');
    });
 })

    // Should render Star Button
    // Should render Badges for stack
    // Should link to a Project Page