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
//         {{ project.version?.charAt(0).toUpperCase() + project.version?.slice(1) }}
</script>

<template>
  <NuxtLink
    :to="{ name: 'templates-slug', params: { slug: project.slug } }"
    class="group relative"
  >

    <Card
      class="rounded-3xl overflow-hidden relative hover:drop-shadow-xl transition-all flex flex-col h-full justify-between"
    >
      <div class="absolute p-3 font-fira z-10 flex gap-3">
        <Badge
          variant="outline"
          class=" bg-white"
        >
          Idea
        </Badge>
        <Badge
          v-if="project.progress === 100"
          variant="outline"
          class=" bg-success  border-none flex items-center gap-1"
        >
          <Icon
            name="heroicons:check-circle"
          /> Ready
        </Badge>
      </div>
      <NuxtImg
        :src="`images/${project.image}`"
        class="w-full h-44 object-cover rounded-3xl opacity-85 group-hover:opacity-100"
      />
      <CardHeader class="flex-1">
        <div class="flex justify-between gap-8">
          <CardTitle class="tracking-wider">
            {{ project.title }} <span class="text-xs ms-1 font-normal text-gray-400">v.{{ project.version }}</span>
          </CardTitle>
          <div
            class="flex items-center text-xs gap-1"
          >
            <Icon
              name="heroicons:heart-solid"
              size="16"
            />
            <span>{{ project.likes ?? 0 }}</span>
          </div>
        </div>
        <CardDescription class="line-clamp-2">
          {{ project.description }}

        </CardDescription>
      </CardHeader>
      <CardContent />
      <CardFooter class="text-sm">
        <div
          v-if="project.progress === 100"
          class="flex items-center gap-2"
        >
          <Icon name="heroicons:rocket-launch" />
          {{ project.projects?.length }} Started
        </div>
        <div
          v-else
          class="flex gap-2 flex-wrap items-center"
        >
          <Icon name="ph:hand-heart" />
          <span class="text-sm">Help requests: </span>
          <Badge
            v-for="(need, index) in project.needs"
            :key="`need-${need?.value}-${index}`"
            variant="secondary"
          >
            {{ need?.value }}
          </Badge>
        </div>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
