<script lang="ts" setup>
import { AlertCircle } from 'lucide-vue-next'
import type { Project } from '../types/project.types.js'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

defineProps<{ projects: Project[], message?: string }>()
</script>

<template>
  <div
    v-if="projects.length > 0"
    class="grid grid-cols-3 gap-8 py-8 auto-rows-fr"
  >
    <ProjectListCard
      v-for="(project) in projects"
      :key="`${project.id}-project-item`"
      :project="project"
      data-test="project-item"
    >
      <template #likes>
        <ProjectLikes
          :likes="project.like"
          :project-id="project.id"
        />
      </template>
    </ProjectListCard>
  </div>
  <div
    v-else
    class="py-8"
  >
    <Alert data-test="project-warning">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Oups...</AlertTitle>
      <AlertDescription>{{ message }}</AlertDescription>
    </Alert>
  </div>
</template>
