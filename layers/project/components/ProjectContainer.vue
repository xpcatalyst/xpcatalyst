<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock";
import { MESSAGE } from '../utils/project.constants.js';
import { useProjects } from '../composables/useProjects';
import { Workflow } from "../types/project.types";

const workflowValues = Object.values(Workflow);
const { filteredProjects, updateSearchTerm, updateWorkflowFilter } = useProjects(mockProjects);
</script>

<template>
  <section class="container my-8">
    <div class="flex gap-8">
      <ProjectListFilterSearch @update:search="updateSearchTerm" :placeholder="MESSAGE.SEARCH_PLACEHOLDER" />
      <ProjectListFilterWorkflow @update:workflow="updateWorkflowFilter" :options="workflowValues" />
    </div>
    <ProjectList :projects="filteredProjects" :message="MESSAGE.NO_PROJECTS" />
  </section>
</template>