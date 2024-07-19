import { describe, it, expect } from 'vitest';
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ProjectFilterStack from "../components/ProjectFilterStack.vue"
import { type Option } from "../types/project.types.js"
describe("ProjectFilterStack", () => { 

    it('Should render the options', async () => {
        const options: Option[] = [
            { value: 'option1', label:"OPTION 1", nb:1 },
            { value: 'option2', label:"OPTION 2", nb:10 },
            { value: 'option3', label:"OPTION 3", nb:100 },
        ]
        
        const wrapper = await mountSuspended(ProjectFilterStack, { props: { options }});

        // expect(wrapper.find('option[value="Option1"]').exists()).toBe(true)
        // expect(wrapper.find('option[value="Option2"]').exists()).toBe(true)
        // expect(wrapper.find('option[value="Option3"]').exists()).toBe(true)
    })

})