import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime"
import ProjectSort from "../components/ProjectSort.vue"
import { type SortOption } from "../types/project.types";

describe("ProjectSort", () => {
    const options: SortOption[] = [
        { value: 'date', label:"Date", order: "asc" },
        { value: 'date', label:"Date", order: "desc" },
        { value: 'stars', label:"Popularity", order: "asc" },
        { value: 'stars', label:"Popularity", order: "desc" },
        { value: 'name', label:"Name", order: "asc" },
        { value: 'name', label:"Name", order: "desc" },
    ]
    
    it('Select component renders with provided options', async () => {

        const wrapper = await mountSuspended(ProjectSort, { props: { options } })

        expect(wrapper.find('option[value="date-asc"]').exists()).toBe(true)
        expect(wrapper.find('option[value="date-desc"]').exists()).toBe(true)
        expect(wrapper.find('option[value="stars-asc"]').exists()).toBe(true)
        expect(wrapper.find('option[value="stars-desc"]').exists()).toBe(true)
        expect(wrapper.find('option[value="name-asc"]').exists()).toBe(true)
        expect(wrapper.find('option[value="name-desc"]').exists()).toBe(true)
    })

    it('Should emit an update event with selected workflow', async () => {
        const wrapper = await mountSuspended(ProjectSort, { props: { options } })
       
        const selectElement = wrapper.find('select[data-test="select-sort"]');

        await selectElement.setValue('stars-desc');

        const emittedEvents = wrapper.emitted('update:sort');
        expect(emittedEvents).toBeDefined();
        expect(emittedEvents?.[0]).toEqual([{ value: 'stars', label:"Popularity", order: "desc" }]);
      });
})