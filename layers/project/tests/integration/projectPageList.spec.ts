import { describe, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import projectPage from "../../pages/project/index.vue";
import ProjectList from "../../components/ProjectList.vue";

describe("ProjectPage Integration tests", () => { 

    it('renders the ProjectList component', async () => {
        const wrapper = await mountSuspended(projectPage);
        expect(wrapper.findComponent(ProjectList).exists()).toBe(true);
      });
    
})