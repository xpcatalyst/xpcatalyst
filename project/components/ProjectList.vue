<script lang="ts" setup>
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { type Project, NO_PROJECTS_MESSAGE, ProjectListItem } from "@/project"
defineProps<{ projects?: Project[]}>()
</script>

<template>
    <div v-if="!projects || projects?.length === 0">
      <Alert 
        variant="warning"
        data-test="alert-warning">
        <AlertCircle class="w-4 h-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>{{ NO_PROJECTS_MESSAGE }}</AlertDescription>
      </Alert>
    </div>
    <div v-else class="grid grid-cols-3 gap-8">
      <ProjectListItem 
        v-for="project in projects" 
        :key="`project-item-${project.id}`" 
        :project="project"
        data-test="project-item" />
  </div>
</template>