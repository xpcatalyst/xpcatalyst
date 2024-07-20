import { describe, it, expect } from 'vitest';
import { useProjects } from '../composables/useProjects';
import { type Project, type SortOption } from "../types/project.types";

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

        expect(workflowOptions.value.length).toEqual(3);
        expect(workflowOptions.value).toEqual( [
            { value: "draft", label: "Draft", nb: 2 },
            { value: "alpha", label: "Alpha", nb: 1 },
            { value: "beta", label: "Beta", nb: 1 },
        ]);
    })

    it("Should return a list of stack options", () => { 
        const projects: Project[] = [
            { stack: ["React", "Supabase"] } as Project,
            { stack: ["Vue", "Supabase"] } as Project,
            { stack: ["Vue", "Supabase"] } as Project,
        ];

        const { stackOptions } = useProjects(projects);

        expect(stackOptions.value.length).toEqual(3);
        expect(stackOptions.value).toEqual( [
            { value: "React", label: "React", nb: 1 },
            { value: "Supabase", label: "Supabase", nb: 3 },
            { value: "Vue", label: "Vue", nb: 2 },
        ]);
    })

    it("Should filter projects by stack", () => { 
        const projects: Project[] = [
            { stack: ["React", "Supabase"] } as Project,
            { stack: ["Vue", "Supabase"] } as Project,
            { stack: ["Vue", "Supabase"] } as Project,
        ];

        const { filteredProjects, updateStackFilter } = useProjects(projects);

        updateStackFilter(['Vue']);
        expect(filteredProjects.value.length).toEqual(2);
        
        updateStackFilter(['React']);
        expect(filteredProjects.value).toEqual([{ stack: ["React", "Supabase"] }]);

        updateStackFilter([]);
        expect(filteredProjects.value).toEqual(projects);
    })


    it("Should sort projects by date", () => {
        const projects: Project[] = [
            { date: "2021-01-01" } as Project,
            { date: "2022-01-01" } as Project,
            { date: "2020-01-01" } as Project
          ]
        const { sortedProjects, updateSort } = useProjects(projects);

        updateSort({ value: 'date', order: 'asc' } as SortOption,);
        expect(sortedProjects.value).toEqual([
            { date: "2020-01-01" },
            { date: "2021-01-01" },
            { date: "2022-01-01" },
          ]);

        updateSort({ value: 'date', order: 'desc' } as SortOption,);
        expect(sortedProjects.value).toEqual([
            { date: "2022-01-01" },
            { date: "2021-01-01" },
            { date: "2020-01-01" },
          ]); 
    })

    it("Should sort projects by name", () => {
        const projects: Project[] = [
            { name: "Project B" } as Project,
            { name: "Project A" } as Project,
            { name: "Project C" } as Project
          ]
        const { sortedProjects, updateSort } = useProjects(projects);

        updateSort({ value: 'name', order: 'asc' } as SortOption);
        expect(sortedProjects.value).toEqual([
            { name: "Project A" },
            { name: "Project B" },
            { name: "Project C" }
          ]);

        updateSort({ value: 'name', order: 'desc' } as SortOption);
        expect(sortedProjects.value).toEqual([
            { name: "Project C" },
            { name: "Project B" },
            { name: "Project A" }
          ]); 
    })


    it("Should sort projects by popularity", () => {
        const projects: Project[] = [
            { stars: 1 } as Project,
            { stars: 3 } as Project,
            { stars: 2 } as Project
          ]
        const { sortedProjects, updateSort } = useProjects(projects);

        updateSort({ value: 'stars', order: 'asc' } as SortOption);
        expect(sortedProjects.value).toEqual([
            { stars: 1 },
            { stars: 2 },
            { stars: 3 }
          ]);

        updateSort({ value: 'stars', order: 'desc' } as SortOption);
        expect(sortedProjects.value).toEqual([
            { stars: 3 },
            { stars: 2 },
            { stars: 1 }
          ]); 
    })
});

