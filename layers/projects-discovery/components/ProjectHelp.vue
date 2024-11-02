<script setup lang="ts">
import type { Need } from '~~/db'

defineProps<{ needs: (Need | undefined)[] | undefined }>()
</script>

<template>
  <div class="bg-purple-200 p-4 rounded-xl text-black">
    <h2 class="text-2xl font-bold flex items-center gap-2 ">
      Do you want to help?
    </h2>
    <div class="flex items-center gap-4 mt-4">
      <Button
        v-for="need in needs"
        :key="need?.id"
        class=" w-fit border border-black rounded px-4 py-2 flex items-center gap-2"
      >
        Help on {{ need?.value }} <Icon
          name="ph:hand-heart"
          size="24"
        />
      </Button>
    </div>
  </div>
</template>
