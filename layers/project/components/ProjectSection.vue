<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock";
import { useProjects } from '../composables/useProjects';

const { filteredProjects, updateSearchTerm, updateWorkflowFilter } = useProjects(mockProjects);
</script>

<template>
  <section class="container my-8">
    <div class="flex gap-8">
      <ProjectListFilterSearch @update:search="updateSearchTerm" />
      <ProjectListFilterWorkflow @update:workflow="updateWorkflowFilter" />
    </div>
    <ProjectList :projects="filteredProjects" />
  </section>
</template>