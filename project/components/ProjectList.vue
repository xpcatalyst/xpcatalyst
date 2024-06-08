<script lang="ts" setup>
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { type Project, NO_PROJECTS_MESSAGE } from "@/project"
defineProps<{ projects?: Project[]}>()
</script>

<template>
    <div v-if="!projects || projects?.length === 0">
      <Alert variant="warning">
        <AlertCircle class="w-4 h-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>{{ NO_PROJECTS_MESSAGE }}</AlertDescription>
      </Alert>
    </div>
    <div v-else class="grid grid-cols-3 gap-8">
      <div v-for="project in projects" :key="`project-item-${project.id}`" data-test="project-item">
        {{ project.id }} = {{  project.name }}
      </div>
  </div>
</template>