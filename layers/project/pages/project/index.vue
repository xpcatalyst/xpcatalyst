<script lang="ts" setup>
import { mockProjects } from '../../utils/project.mock'
import { MESSAGE, SORT_OPTIONS } from '../../utils/project.constants.js'
import { useProjects } from '../../composables/useProjects'

const { sortedProjects,
  updateSearchTerm,
  updateWorkflowFilter,
  updateStackFilter,
  updateSort,
  workflowOptions,
  stackOptions,
  triggerLike,
} = useProjects(mockProjects)

provide('triggerLike', triggerLike)
</script>

<template>
  <section>
    <div class="flex gap-8">
      <ProjectFilterSearch
        :placeholder="MESSAGE.SEARCH_PLACEHOLDER"
        @update:search="updateSearchTerm"
      />
      <ProjectFilterWorkflow
        :options="workflowOptions"
        @update:workflow="updateWorkflowFilter"
      />
      <ProjectFilterStack
        :options="stackOptions"
        @update:stack="updateStackFilter"
      />
      <ProjectSort
        :options="SORT_OPTIONS"
        @update:sort="updateSort"
      />
    </div>
    <ProjectList
      :projects="sortedProjects"
      :message="MESSAGE.NO_PROJECTS"
    />
  </section>
</template>
