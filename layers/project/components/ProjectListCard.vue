<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { type ProjectSummary } from "../types/project.types"

defineProps<{ project: ProjectSummary }>()

const emit = defineEmits(['trigger:like'])
const handleLike = (projectId: number) => {
  emit('trigger:like', projectId)
}
</script>

<template>
  <Card>
    <CardHeader>
      <Badge variant="outline" class="w-fit mb-4">{{ project.workflow?.charAt(0).toUpperCase() + project.workflow?.slice(1) }}</Badge>
      <div class="flex justify-between gap-8">
        <CardTitle>{{ project.name }}</CardTitle>
        <ProjectLikes :likes="project.like" :projectId="project.id" @trigger:like="handleLike" />
      </div>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent>
    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`tech-${tech}-${index}`">
        {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>