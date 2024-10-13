<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="flex items-center justify-center flex-grow">
    <div class="container text-center max-w-5xl font-pink-500">
      <div class="flex flex-col gap-8">
        <h1 class="text-8xl font-dot">
          XP Catalyst
        </h1>
        <p class="text-xl lg:text-4xl">
          Collaborate on real-world projects.
        </p>
      </div>
      <div class="flex flex-row gap-16 justify-center mt-24">
        <Button class="text-xl px-8 py-6 rounded-full shadow-xl bg-xp-light-green text-black hover:text-white">
          Start Building
        </Button>
        <Button
          class="text-xl px-8 py-6 rounded-full  shadow-xl bg-xp-pink text-black hover:text-white"
        >
          Explore Projects
        </Button>
      </div>
    </div>
  </section>
</template>
