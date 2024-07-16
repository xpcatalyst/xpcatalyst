import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { type Project } from "../types/project.types";
import ProjectList from "../components/ProjectList.vue";

describe("ProjectList", () => {

    const projects: Project[] = [ 
        { id:1, name: "PROJECT1" } as Project, 
        { id:2, name: "PROJECT2" } as Project, 
        { id:3, name: "PROJECT3" } as Project, 
        { id:4, name: "PROJECT4" } as Project, 
    ]

    it("Should render correct number of project items", async () => {
       const wrapper = await mountSuspended(ProjectList, { props : { projects } })
       const projectItems = wrapper.findAll("[data-test=project-item]")
       expect(projectItems.length).toBe(projects.length)
    })

    it("Should display a message when no projects are specified", async () => {
        const wrapper = await mountSuspended(ProjectList, { props : { projects: [], message: "MESSAGE" } })
        expect(wrapper.text()).toContain("MESSAGE")
    })
})

//Should render N skeleton projects on loading state
