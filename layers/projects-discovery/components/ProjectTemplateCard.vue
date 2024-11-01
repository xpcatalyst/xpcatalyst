<script lang="ts" setup>
import type { ProjectTemplate } from '@@/db'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

defineProps<{ project: ProjectTemplate }>()
//    :to="{ name: 'project-id', params: { id: project.id } }"
</script>

<template>
  <NuxtLink
    to="/"
    class="group"
  >
    <Card class="rounded-3xl overflow-hidden relative hover:drop-shadow-xl hover:scale-[1.02] transition-all flex flex-col h-full">
      <Badge
        variant="outline"
        class="absolute top-4 left-4 w-fit bg-white border-none z-20"
      >
        {{ project.version?.charAt(0).toUpperCase() + project.version?.slice(1) }}
      </Badge>
      <NuxtImg
        :src="`images/${project.image}`"
        class="w-full h-44 object-cover rounded-3xl opacity-85 group-hover:opacity-100"
      />
      <CardHeader>
        <div class="flex justify-between gap-8">
          <CardTitle class="tracking-wider">
            {{ project.title }}
          </CardTitle>
          <slot name="likes" />
        </div>
        <CardDescription class="line-clamp-2">
          {{ project.description }}
        </CardDescription>
      </CardHeader>
      <CardContent />
      <CardFooter class="flex gap-2 flex-wrap">
        <Badge
          v-for="(need, index) in project.needs"
          :key="`need-${need?.value}-${index}`"
          variant="secondary"
        >
          {{ need?.value }}
        </Badge>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
