<script lang="ts" setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex flex-col space-y-3 p-4 rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm'">
    <Skeleton class="h-[125px] w-full rounded-xl" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>