import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime' // => Icon component which could be async

import { type Project, ProjectList, PROJECTS_NB, NO_PROJECTS_MESSAGE } from '@/project'

describe('ProjectList', () => {
  it.todo('Should render N project items when its number is greater than N')
  it.todo('Should render the correct number of project items when its number is lesser than N');
  it.todo('Should display N skeleton projects on loading state')
  it.todo('Should display a message when the array of projects is empty')
  it.todo('Should display a message when no projects props are specified')
  it.todo('Should display a warning component when no projects are present')
  it.todo('Should not display a warning component when projects are present')
})