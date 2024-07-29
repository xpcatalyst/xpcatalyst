import { describe, it, expect, vi } from "vitest";
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
       const wrapper = await mountSuspended(ProjectList, { 
        props : { projects },
        global: { provide: { triggerLike: vi.fn()} }
    })
       const projectItems = wrapper.findAll("[data-test=project-item]")
       expect(projectItems.length).toBe(projects.length)
    })

    it("Should display a message when no projects are specified", async () => {
        const wrapper = await mountSuspended(ProjectList, { 
            props : { projects: [], message: "MESSAGE" },
            global: { provide: { triggerLike: vi.fn()} }
        })
        expect(wrapper.text()).toContain("MESSAGE")
    })
})

//Should render N skeleton projects on loading state
/*
  it.todo('fetches projects on init.todo load if projects list is empty');
  it.todo('shows loading indicator when projects are being fetched');
  it.todo('disables "Load More" button when loading or no more projects available');
  it.todo('displays error message when there is an error fetching projects');
  it.todo('loads more projects on "Load More" button click');
  it.todo('does not call loadMoreProjects if hasMoreProjects is false');
  it.todo('updates displayedProjects after loadMoreProjects')
  */
