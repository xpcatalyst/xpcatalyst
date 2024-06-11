import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { mountSuspended } from '@nuxt/test-utils/runtime'

import { type ProjectSummary, ProjectListItem, mockProjects } from '@/project'
describe('ProjectListItem', () => { 
    it.todo('Should display the name and the description of the project', async () => {
        const project = mockProjects[0] as ProjectSummary;
        // Needs mountSuspended for Icon module ?
        const wrapper = await mountSuspended(ProjectListItem, { props: { project: project } })

        // const wrapper = mount(ProjectListItem, { props: { project: project } })
        expect(wrapper.text()).toContain(project.name)
        expect(wrapper.text()).toContain(project.description)
    })
    it.todo('Should allow star interactions')
    it.todo('Should open a new page for the project when you click on it')
})