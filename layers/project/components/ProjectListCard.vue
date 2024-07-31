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
  <NuxtLink :to="{ name: 'project-id', params: { id: project.id } }" class="group">
    <Card class="rounded-3xl overflow-hidden relative hover:drop-shadow-xl hover:scale-[1.02] transition-all flex flex-col h-full">
      <Badge variant="outline" class="absolute top-4 left-4 w-fit bg-white border-none z-20">
        {{ project.workflow?.charAt(0).toUpperCase() + project.workflow?.slice(1) }}
      </Badge>
      <NuxtImg :src="`images/${project.image}`" class="w-full h-44 object-cover rounded-3xl opacity-85 group-hover:opacity-100"/>
      <CardHeader>
        <div class="flex justify-between gap-8">
          <CardTitle>{{ project.name }}</CardTitle>
          <slot name="likes" />
        </div>
        <CardDescription>{{ project.description }}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter class="flex gap-2 flex-wrap">
        <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`tech-${tech}-${index}`">
          {{ tech }}
        </Badge>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>