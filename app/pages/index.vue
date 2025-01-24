<script setup lang="ts">
import CtaButton from '~/components/ui/button/CtaButton.vue'
</script>

<template>
  <section class="flex items-center flex-1">
    <div class="container flex flex-col gap-12">
      <p class="max-w-4xl text-pretty text-6xl leading-tight">
        <span class="font-bold uppercase text-purple-500 dark:text-purple-400 text-4xl tracking-wider">Let's catalyze experience together!</span> <br>Build real-world projects &<br> help non-profit initiatives.
      </p>
      <div class="flex gap-8">
        <CtaButton
          to="/"
          variant="secondary"
          size="lg"
        >
          Explore Projects
        </CtaButton>
        <CtaButton
          to="/"
          size="lg"
          class="group flex items-center"
        >
          Get started
          <Icon
            name="ph:arrow-right"
            class="group-hover:translate-x-2 transition-transform"
            size="24"
          />
        </CtaButton>
      </div>
    </div>
  </section>
</template>
