import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

const TestComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

describe('App Setup', () => {
  it('Should run a basic vitest test correctly', () => {
    expect(true).toBe(true)
  })
  it('Should run a DOM test with happy-dom correctly', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
  })
  it('Should run a Vue component test correctly', () => {
    const wrapper = mount(TestComponent, {
      props: {
        msg: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
})