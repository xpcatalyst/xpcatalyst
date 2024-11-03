<script lang="ts" setup>
const config = useRuntimeConfig()

const open = ref(true)
</script>

<template>
  <div
    v-if="open"
    class="w-screen bg-xp-yellow text-black py-2"
  >
    <div class="container flex justify-center gap-4 items-center">
      <p>Prototype v{{ config.public.version }} with <b>static data</b></p><Icon
        name="ph:x-circle"
        size="22"
        @click="() => open = false"
      />
    </div>
  </div>
</template>
