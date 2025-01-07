<script setup lang="ts">
import CtaButton from '~/components/ui/button/CtaButton.vue';
</script>

<template>
  <section class="flex items-center flex-1">
    <div class="container flex flex-col gap-12">
      <p class="max-w-3xl text-pretty text-4xl leading-snug">
        Secure your career in web development and make a positive impact by working on <span
          class="text-purple-300 font-semibold">real-world projects</span> and helping non-profit initiatives.
      </p>
      <div class="flex gap-8">
        <CtaButton to="/" variant="outline" size="lg">
          Explore Projects
        </CtaButton>
        <CtaButton to="/" variant="default" size="lg" icon="ph:arrow-right-bold">
          Get started
        </CtaButton>

      </div>
    </div>
  </section>
</template>
