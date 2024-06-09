import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import {type Project, mockProjects, ProjectList, NO_PROJECTS_MESSAGE } from '@/project'

describe('ProjectList', () => { 

    it('Should render the correct number of project items', () => { 
        const projects = mockProjects as Project[]
        const wrapper = mount(ProjectList, { props: { projects: projects } })
        const projectItems = wrapper.findAll('[data-test="project-item"]')
        expect(projectItems.length).toBe(mockProjects.length)

    })
    it('Should display a message when no projects are available', () => {
        const wrapperWithEmptyProject = mount(ProjectList, { props: { projects: [] } })
        expect(wrapperWithEmptyProject.text()).toContain(NO_PROJECTS_MESSAGE)

        const wrapperWithNoProps = mount(ProjectList)
        expect(wrapperWithNoProps.text()).toContain(NO_PROJECTS_MESSAGE)
    })
})