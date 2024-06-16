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
import { type ProjectSummary, useProjectStore } from '@/project'

const props = defineProps<{ project: ProjectSummary }>()

const projectStore = useProjectStore()

// function incrementStars() {
//   projectStore.incrementStars(props.project.id);
// }
const incrementStar = () => {
  projectStore.incrementStars(props.project.id)
}

//:class="{ 'text-yellow-500': isStarred }"
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.name }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent class="">
      <div class="flex items-center gap-1 text-xs">
        <button @click="incrementStar" class="h-4 w-4 text-yellow-500" aria-label="star">
          <Icon  name="uil:github" />
        </button>
        {{ project.stars }}
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 flex-wrap items-end">
      <Badge variant="secondary" v-for="(tech, index) in project.stack" :key="`tech-${index}`">
      {{ tech }}
      </Badge>
    </CardFooter>
  </Card>
</template>