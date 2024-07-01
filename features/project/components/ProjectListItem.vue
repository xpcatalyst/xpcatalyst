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

import { type ProjectSummary } from '..'

defineProps<{ project: ProjectSummary }>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.name }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center text-xs gap-1">
        <Icon name="material-symbols:star-rate-rounded" size="24" />
        {{ project.stars }}
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`${project.id}-tech-${index}`">
        {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>
