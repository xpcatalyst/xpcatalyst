<script setup lang="ts">
import CtaButton from '../ui/button/CtaButton.vue'
</script>

<template>
  <header>
    <BaseAppVersion />

    <div class="container flex justify-between text-lg items-center py-8">
      <nav class="flex gap-12 items-center">
        <NuxtLink
          to="/"
          class="font-bold tracking-wide flex items-center gap-2"
        >
          <Icon name="xpc:logo" /> XP.CATALYST
        </NuxtLink>
        <NuxtLink to="/">Projects</NuxtLink>
        <NuxtLink to="/">Guide</NuxtLink>
      </nav>

      <div class="flex gap-4 items-center">
        <NuxtLink to="/login">Login</NuxtLink>
        <CtaButton to="/signup">
          Sign Up
        </CtaButton>
      </div>
    </div>
  </header>
</template>
