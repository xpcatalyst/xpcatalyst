import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime"
import ProjectFilterWorkflow from "../components/ProjectFilterWorkflow.vue"

describe("ProjectFilterWorkflow", () => {

    it('Select component renders with provided options', async () => {
        const options = ['Option1', 'Option2', 'Option3']
        const wrapper = await mountSuspended(ProjectFilterWorkflow, { props: { options } })

        expect(wrapper.find('option[value="Option1"]').exists()).toBe(true)
        expect(wrapper.find('option[value="Option2"]').exists()).toBe(true)
        expect(wrapper.find('option[value="Option3"]').exists()).toBe(true)
    })

    it('Should emit an update event with selected workflow', async () => {
        const options = ['Option1', 'Option2', 'Option3']
        const wrapper = await mountSuspended(ProjectFilterWorkflow, { props: { options } });
        const selectElement = wrapper.find('select[data-test="select-workflow"]');

        await selectElement.setValue('Option2');

        const emittedEvents = wrapper.emitted('update:workflow');
        expect(emittedEvents).toBeDefined();
        expect(emittedEvents?.[0]).toEqual(['Option2']);
      });
})