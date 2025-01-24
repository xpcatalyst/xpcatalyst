<script lang="ts" setup>
const config = useRuntimeConfig()
const open = ref(true)
</script>

<template>
  <div
    v-if="open"
    class="w-screen bg-purple-100 dark:bg-purple-700 flex py-4 px-8 text-black dark:text-gray-200 items-center"
  >
    <div class="container flex justify-center">
      <p>
        Prototype v.<span class="font-semibold">{{ config.public.version }}</span>
      </p>
    </div>

    <div class="h-8 w-8 group hover:bg-white/20 hover:cursor-pointer flex justify-center items-center rounded-full">
      <Icon
        name="ph:x"
        size="20"
        class=""
        @click="() => (open = false)"
      />
    </div>
  </div>
</template>
