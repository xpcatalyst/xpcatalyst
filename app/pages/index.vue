<script setup lang="ts">
import CtaButton from '~/components/ui/button/CtaButton.vue'
</script>

<template>
  <section class="flex items-center flex-1">
    <div class="container flex flex-col gap-12">
      <p class="max-w-3xl text-pretty text-4xl leading-tight">
        Secure your career in web development and make a positive impact by working on <span
          class="text-purple-300 font-medium"
        >real-world projects</span> and helping non-profit initiatives.
      </p>
      <div class="flex gap-8">
        <CtaButton
          to="/"
          variant="outline"
          size="lg"
        >
          Explore Projects
        </CtaButton>
        <CtaButton
          to="/"
          size="lg"
          class="group"
        >
          Get started
          <Icon
            name="ph:arrow-right"
            class="ms-2 group-hover:translate-x-2 transition-transform"
            size="24"
          />
        </CtaButton>
      </div>
    </div>
  </section>
</template>
