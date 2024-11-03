<script setup lang="ts">
const isLoggedIn = false
</script>

<template>
  <NuxtLink
    v-if="isLoggedIn"
    to="/dashboard"
    class=" text-white hover:border-white border border-transparent rounded-full grid items-center"
  >
    <Icon
      name="heroicons:user-circle-solid"
      size="28"
    />
  </NuxtLink>

  <div
    v-else
    class="flex items-center rounded-full bg-neutral-100"
  >
    <NuxtLink
      to="/login"
      class="ps-4 py-1 pe-2 text-neutral-500 hover:text-black hover:underline underline-offset-2 text-lg"
    >
      Login
    </NuxtLink>
    <NuxtLink
      to="/subscribe"
      class="px-4 py-1 rounded-full bg-black text-white hover:underline underline-offset-2 text-lg"
    >
      Join us
    </NuxtLink>
  </div>
</template>
