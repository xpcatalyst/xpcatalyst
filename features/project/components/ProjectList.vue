<script setup lang="ts">
import { type IProject } from "../";
defineProps<{ projects?: IProject[] }>();
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectListCard v-for="project in projects" :key="project.id" :project />
  </div>
</template>
