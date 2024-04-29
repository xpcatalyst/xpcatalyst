<script setup lang="ts">
import { type IProject } from "@/types/projects.interface";
defineProps<{
  project?: IProject;
}>();
</script>

<template>
  <div class="rounded p-8 bg-gray-100 border">
    {{ project?.title }} - {{ project?.id }}
  </div>
</template>
