<script setup lang="ts">
import CtaButton from '~/components/ui/button/CtaButton.vue'
</script>

<template>
  <section class="flex items-center flex-1">
    <div class="container">
      <div class="max-w-2xl flex flex-col gap-12">
        <div class="text-pretty space-y-4">
          <h2 class="text-2xl font-semibold">
            Build real-world projects & help non-profit initiatives
          </h2>
          <h1 class="font-bold text-7xl leading-tight">
            Gain Experience in Web Development
          </h1>
        </div>
        <div class="flex gap-8">
          <CtaButton
            to="/"
            size="lg"
            class="bg-green-300"
          >
            Explore Projects
          </CtaButton>
          <CtaButton
            to="/"
            size="lg"
            class="group flex items-center bg-purple-400"
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
    </div>
  </section>
</template>
