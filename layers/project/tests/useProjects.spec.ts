
import { describe, it, expect } from 'vitest'
import { useProjects } from '../composables/useProjects'
import { mockProjects } from '../utils/project.mock'

describe("useProjects", () => {

    it("Should return the correct number of filtered projects", ()=> {
         const { filteredProjects, updateSearchTerm } = useProjects(mockProjects)
         expect(filteredProjects.value.length).toEqual(mockProjects.length)
         updateSearchTerm('commerce')         
         expect(filteredProjects.value.length).toEqual(2)
    })
})
