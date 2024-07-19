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
</script>

<template>
  <Card>
    <CardHeader>
      <Badge variant="outline" class="w-fit mb-4">{{ project.workflow.charAt(0).toUpperCase() + project.workflow.slice(1) }}</Badge>
      <div class="flex justify-between">
        <CardTitle>{{ project.name }}</CardTitle>
        <ProjectStar :star="project.stars" />
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