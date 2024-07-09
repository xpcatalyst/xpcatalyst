import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime"
import ProjectListFilterWorkflow from "../components/ProjectListFilterWorkflow.vue"

describe("ProjectListFilterWorkflow", () => {

    it('Should emit an update event with selected workflow', async () => {
        const wrapper = await mountSuspended(ProjectListFilterWorkflow);

        // Check initial state
        const select = wrapper.find('select');
        expect(select.exists()).toBe(true);

        // Set value and trigger change event
        await select.setValue('draft');
        
        // Verify the event is emitted
        const emittedEvents = wrapper.emitted('update:workflow');
        expect(emittedEvents).toBeDefined();
        expect(emittedEvents?.length).toBeGreaterThan(0);
        expect(emittedEvents?.[0]).toEqual(['draft']);
    });
})


/*
const initialProjects = [
            { id: 1, name: 'Project 1', description: 'Desc 1', workflow: 'draft' },
            { id: 2, name: 'Project 2', description: 'Desc 2', workflow: 'public' },
            { id: 3, name: 'Project 3', description: 'Desc 3', workflow: 'alpha' },
        ];

        const wrapper = await mountSuspended(ProjectListFilterWorkflow, {
            props: { initialProjects },
        });

        expect(wrapper.html()).toContain('Project 1');
        expect(wrapper.html()).toContain('Project 2');
        expect(wrapper.html()).toContain('Project 3');

        await wrapper.find('select').setValue('public');
        expect(wrapper.html()).toContain('Project 2');
        expect(wrapper.html()).not.toContain('Project 1');
        expect(wrapper.html()).not.toContain('Project 3');
*/