import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import {type Project, mockProjects, ProjectList, NO_PROJECTS_MESSAGE } from '@/project'


/*
let wrapper: ReturnType<typeof mount>
beforeEach(() => {
  wrapper = mount(WordleBoard, {props: {wordOfTheDay}})
    })
*/

describe('ProjectList', () => { 

    it('Should render the component ProjectList',  async() => { 
       const component = await mountSuspended(ProjectList)
       expect(component).toBeDefined()
    })
    it('Should render the correct number of project items', () => { 
        const projects = mockProjects as Project[]
        const wrapper = mount(ProjectList, {
            props: {
                projects: projects
            }
        })
        const projectItems = wrapper.findAll('[data-test="project-item"]')
        expect(projectItems.length).toBe(mockProjects.length)

    })
    it('Should display a message when projects are empty', () => {
        const wrapperWithEmptyProject = mount(ProjectList, { props: {projects: []}})
        // expect(wrapper.find('[data-test="no-projects"]').exists()).toBe(true)
        expect(wrapperWithEmptyProject.text()).toContain(NO_PROJECTS_MESSAGE)

        const wrapperWithNoProps = mount(ProjectList)
        expect(wrapperWithNoProps.text()).toContain(NO_PROJECTS_MESSAGE)

    })
})