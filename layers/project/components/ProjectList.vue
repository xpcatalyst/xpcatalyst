<script lang="ts" setup>
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { type Project } from "../types/project.types.js"

defineProps<{ projects: Project[], message?: string }>()

const emit = defineEmits(['trigger:like'])
const handleLike = (projectId: number) => {
  emit('trigger:like', projectId)
}
</script>

<template>
  <div v-if="projects.length > 0" class="grid grid-cols-3 gap-8 py-8">
    <ProjectListCard 
      v-for="(project) in projects" 
      :key="`${project.id}-project-item`" 
      :project="project"
      data-test="project-item" 
      @trigger:like="handleLike" />
  </div>
  <div v-else class="py-8">
    <Alert data-test="project-warning">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Oups...</AlertTitle>
      <AlertDescription>{{ message }}</AlertDescription>
    </Alert>
  </div>
</template>
