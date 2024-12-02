<script lang="ts" setup>
const config = useRuntimeConfig()

const open = ref(true)
</script>

<template>
  <div
    v-if="open"
    class="w-screen bg-xp-light-purple text-black py-2"
  >
    <div class="container flex justify-center gap-4 items-center">
      <p>Prototype v{{ config.public.version }}: static data</p><Icon
        name="ph:x"
        size="22"
        class="hover:cursor-pointer"
        @click="() => open = false"
      />
    </div>
  </div>
</template>
