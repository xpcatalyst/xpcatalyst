<script setup lang="ts">
import CtaButton from '~/components/ui/button/CtaButton.vue';
</script>

<template>
  <section class="flex items-center flex-1">
    <div class="container flex flex-col gap-16">
      <p class="max-w-5xl text-balance text-4xl">
        Secure your career in web development & make a positive impact by working on curated
        <span class="text-purple-300 font-semibold">real-world projects</span> for non-profit initiatives.
      </p>
      <div class="flex gap-8">
        <CtaButton to="/" variant="default" size="lg" icon="ph:arrow-right-bold">
          Get started
        </CtaButton>
        <CtaButton to="/" variant="secondary" size="lg">
          Explore Projects
        </CtaButton>
      </div>
    </div>
  </section>
</template>
