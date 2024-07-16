import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ProjectFilterSearch from "../components/ProjectFilterSearch.vue"

describe("ProjectFilterSearch", () => { 

    it('Should render the input element', async () => {
        const wrapper = await mountSuspended(ProjectFilterSearch, { props: { placeholder: 'PLACEHOLDER' } });
        const input = wrapper.find('input[type="text"]');

        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe('PLACEHOLDER');
      });

    it("Should emit the search term when input changes", async () => {
        const wrapper = await mountSuspended(ProjectFilterSearch);
        const input = wrapper.find('input[type="text"]');

        await input.setValue('commerce');

        expect(wrapper.emitted('update:search')).toHaveLength(1);
        expect(wrapper.emitted('update:search')![0]).toEqual(['commerce']);
    })
})