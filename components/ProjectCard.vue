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


import { type Project } from '@/data/types';
defineProps<{project: Project}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.title }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent class="">
    <StarRate :rate="project.stars" />
    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`tech-${index}`">
      {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>