import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectSection from '../components/ProjectSection.vue'
import { type Project } from '../types/project.types.js'

describe("ProjectSection", () => {

    // const projects: Project[] = [ 
    //     { id:1, name: "PROJECT1" } as Project, 
    //     { id:2, name: "PROJECT2" } as Project, 
    //     { id:3, name: "PROJECT3" } as Project, 
    //     { id:4, name: "PROJECT4" } as Project, 
    // ]

    it("Should", async () => {
        const wrapper = await mountSuspended(ProjectSection);
        const projectList = wrapper.findComponent({ name: 'ProjectList'})
        expect(projectList.props().projects.length).toBeGreaterThan(0)
        //toEqual(projects)
    })

})