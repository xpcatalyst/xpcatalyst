<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock";
import { MESSAGE } from '../utils/project.constants.js';
import { useProjects } from '../composables/useProjects';

const { filteredProjects, updateSearchTerm, updateWorkflowFilter, workflowOptions } = useProjects(mockProjects);
</script>

<template>
  <section class="container my-8">
    <div class="flex gap-8">
      <ProjectFilterSearch @update:search="updateSearchTerm" :placeholder="MESSAGE.SEARCH_PLACEHOLDER" />
      <ProjectFilterWorkflow @update:workflow="updateWorkflowFilter" :options="workflowOptions" />
    </div>
    <ProjectList :projects="filteredProjects" :message="MESSAGE.NO_PROJECTS" />
  </section>
</template>