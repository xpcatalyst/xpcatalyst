import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime"
import ProjectFilterWorkflow from "../components/ProjectFilterWorkflow.vue"
import { type Option } from "../types/project.types";

describe("ProjectFilterWorkflow", () => {
    const options: Option[] = [
        { value: 'option1', label:"OPTION 1", nb:1 },
        { value: 'option2', label:"OPTION 2", nb:10 },
        { value: 'option3', label:"OPTION 3", nb:100 },
    ]
    
    it('Select component renders with provided options', async () => {

        const wrapper = await mountSuspended(ProjectFilterWorkflow, { props: { options } })

        expect(wrapper.find('option[value="option1"]').exists()).toBe(true)
        expect(wrapper.find('option[value="option2"]').exists()).toBe(true)
        expect(wrapper.find('option[value="option3"]').exists()).toBe(true)
    })

    it('Should emit an update event with selected workflow', async () => {
        const wrapper = await mountSuspended(ProjectFilterWorkflow, { props: { options } });
        const selectElement = wrapper.find('select[data-test="select-workflow"]');

        await selectElement.setValue('option2');

        const emittedEvents = wrapper.emitted('update:workflow');
        expect(emittedEvents).toBeDefined();
        expect(emittedEvents?.[0]).toEqual(['option2']);
      });
})