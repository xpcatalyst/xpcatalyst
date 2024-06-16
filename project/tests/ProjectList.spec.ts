import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import {type Project, mockProjects, ProjectList, NO_PROJECTS_MESSAGE } from '@/project'

describe('ProjectList', () => { 

    // mountSuspended is used because of the Icon component which could be async
    it('Should render the correct number of project items', async () => { 
        const projects = mockProjects as Project[]
        const wrapper = await mountSuspended(ProjectList, { props: { projects: projects } })
        const projectItems = wrapper.findAll('[data-test="project-item"]')
        expect(projectItems.length).toBe(mockProjects.length)
    })

    it('Should display a message when no projects are available', async () => {
        const wrapperWithEmptyProject =  await mountSuspended(ProjectList, { props: { projects: [] } })
        expect(wrapperWithEmptyProject.text()).toContain(NO_PROJECTS_MESSAGE)

        const wrapperWithNoProps = mount(ProjectList)
        expect(wrapperWithNoProps.text()).toContain(NO_PROJECTS_MESSAGE)
    })


      it('Should render Alert component with variant "warning" when no projects are present', async () => {
        const wrapper = await mountSuspended(ProjectList, {
          props: { projects: [] }
        })
        const alert = wrapper.findComponent({ name: 'Alert' })
        expect(alert.exists()).toBe(true)
        expect(alert.props('variant')).toBe('warning')
        expect(wrapper.text()).toContain(NO_PROJECTS_MESSAGE)
      })
      
      it('Should not render Alert component when projects are present', async () => {
        const projects = mockProjects as Project[]
        const wrapper = await mountSuspended(ProjectList, {
          props: { projects }
        })
        const alert = wrapper.findComponent({ name: 'Alert' })
        expect(alert.exists()).toBe(false)
      })

      it.todo('Should display skeleton on loading state')
})