<script lang="ts" setup>
const config = useRuntimeConfig()
const open = ref(true)
</script>

<template>
  <div v-if="open" class="w-screen bg-purple-100 flex py-4 px-8 text-black">
    <div class="container flex justify-center">
      <p>Prototype v.<span class="font-semibold">{{ config.public.version }}</span></p>
    </div>
    <Icon name="ph:x" size="20" class="hover:cursor-pointer" @click="() => open = false" />
  </div>
</template>
