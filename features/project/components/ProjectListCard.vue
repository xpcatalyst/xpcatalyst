<script setup lang="ts">
import { type IProject } from "../";
defineProps<{ project?: IProject }>();

// <div class="w-full h-28 overflow-hidden rounded-2xl bg-bottom border">
//   <NuxtImg src="/card-cover.jpg" class="w-full" />
// </div>
</script>

<template>
  <div class="rounded-2xl bg-white border border-black overflow-hidden">
    <div class="p-4 w-full">
      <h2 class="font-bold py-4 border-b">{{ project?.title }}</h2>
      <p>{{ project?.headline }}</p>

      <div class="flex gap-2 py-4">
        <BaseBadge>
          <Icon name="material-symbols:star" color="black" />
          {{ project?.stars }}
        </BaseBadge>

        <BaseBadge>
          {{ project?.workflow }}
        </BaseBadge>
      </div>

      <div class="flex gap-2 py-4">
        <ProjectStackList :stack="project?.stack" />
      </div>
    </div>
  </div>
</template>
