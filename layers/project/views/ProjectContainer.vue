<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock";
import { MESSAGE, SORT_OPTIONS } from '../utils/project.constants.js';
import { useProjects } from '../composables/useProjects';

const { sortedProjects, 
        updateSearchTerm, 
        updateWorkflowFilter,
        updateStackFilter, 
        updateSort, 
        workflowOptions, 
        stackOptions, 
        incrementStar 
        } = useProjects(mockProjects);
</script>

<template>
  <section class="container my-8">
    <div class="flex gap-8">
      <ProjectFilterSearch @update:search="updateSearchTerm" :placeholder="MESSAGE.SEARCH_PLACEHOLDER" />
      <ProjectFilterWorkflow @update:workflow="updateWorkflowFilter" :options="workflowOptions" />
      <ProjectFilterStack  @update:stack="updateStackFilter" :options="stackOptions" />
      <ProjectSort  @update:sort="updateSort" :options="SORT_OPTIONS" />
    </div>
    <ProjectList :projects="sortedProjects" :message="MESSAGE.NO_PROJECTS" @incrementStar="incrementStar" />
  </section>
</template>