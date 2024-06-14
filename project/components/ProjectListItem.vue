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
import { ref } from 'vue'
import { type ProjectSummary, useProjectStore } from '@/project'

defineProps<{ project: ProjectSummary }>()

const projectStore = useProjectStore()

const isStarred = ref(false)

const toggleStar = () => {
  isStarred.value = !isStarred.value
  projectStore.incrementStars()
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.name }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent class="">
      <div class="flex items-center gap-1 text-xs">
        <button @click="toggleStar" :class="{ 'text-yellow-500': isStarred }" aria-label="star">
          <Icon name="fe:star" />
        </button>
        {{ projectStore.stars }}
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`tech-${index}`">
      {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>