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
import { ref } from 'vue'
const props = defineProps<{ project: ProjectSummary }>()
const isStarred = ref(false)
const projectStore = useProjectStore()

const incrementStar = () => {
  if(!isStarred.value) {
    isStarred.value = true
    projectStore.incrementStars(props.project.id)
  }
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.name }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class=" flex items-center text-xs gap-1">
        <button @click="incrementStar" :class="{ 'text-green-500': isStarred }" aria-label="star">
          <Icon name="material-symbols:star-rate-rounded" size="24"  />
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

<style scoped>
.iconify {
    /* @apply fill-red-500 */
  }

</style>