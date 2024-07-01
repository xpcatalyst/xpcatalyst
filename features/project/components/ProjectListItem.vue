<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { type ProjectSummary, StarButton } from '..'

defineProps<{ project: ProjectSummary }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.name }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
      <StarButton :stars="project.stars" />
    </CardHeader>
    <CardContent>

    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`${project.id}-tech-${index}`">
        {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>
