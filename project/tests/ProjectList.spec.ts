import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import {type Project, mockProjects } from '@/project'
import ProjectList from '../components/ProjectList.vue'

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
    it.todo('Should display a message when no projects are available')
})