import { describe, it, expect } from 'vitest';
import { useProjects } from '../composables/useProjects';
import { type Project } from "../types/project.types";

describe("useProjects", () => {

    it("Should return the correct number of filtered projects based on name and description in lowercase", () => {

        const projects: Project[] = [
            { name: "Redesign", description: "Website redesign." } as Project,
            { name: "WEB App", description: "Create web app." } as Project,
        ];
        const { filteredProjects, updateSearchTerm } = useProjects(projects);

        // Ensure all projects are included at startup
        expect(filteredProjects.value.length).toEqual(projects.length);

        // Should filter to only include projects with 'web' or 'design' in name or description
        updateSearchTerm('web');
        expect(filteredProjects.value.length).toEqual(2);

        updateSearchTerm('design');
        expect(filteredProjects.value.length).toEqual(1);
    });

    it("Should filter projects by workflow status", () => { 
        const projects: Project[] = [
            { workflow: "draft" } as Project,
            { workflow: "draft" } as Project,
            { workflow: "alpha" } as Project,
            { workflow: "beta" } as Project,
        ];
        
        const { filteredProjects, updateWorkflowFilter } = useProjects(projects);

        updateWorkflowFilter('draft');
        expect(filteredProjects.value.length).toEqual(2);

        updateWorkflowFilter('alpha');
        expect(filteredProjects.value).toEqual([{ workflow: "alpha" }]);

        updateWorkflowFilter('');
        expect(filteredProjects.value).toEqual(projects);
    })

    it("Should return a list of workflow options", () => { 

        const projects: Project[] = [
            { workflow: "draft" } as Project,
            { workflow: "draft" } as Project,
            { workflow: "alpha" } as Project,
            { workflow: "beta" } as Project,
        ];

        const { workflowOptions } = useProjects(projects);

        expect(workflowOptions.value.length).toEqual(4);
    })

});

