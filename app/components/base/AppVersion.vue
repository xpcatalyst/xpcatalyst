<script setup lang="ts">
const config = useRuntimeConfig()
const showBanner = ref(false)

const closeBanner = () => {
  showBanner.value = false
  localStorage.setItem('banner-version', config.public.version)
}

onMounted(() => {
  const lastDismissedVersion = localStorage.getItem('banner-version')

  if (lastDismissedVersion !== config.public.version) {
    showBanner.value = true
  }
})
</script>

<template>
  <div
    v-if="showBanner"
    class="w-screen bg-purple-100 dark:bg-purple-700 flex py-4 px-8 text-black dark:text-gray-200 items-center"
  >
    <div class="container flex justify-center">
      <p>
        Prototype v.<span class="font-semibold">{{ config.public.version }}</span>
      </p>
    </div>

    <div
      class="h-8 w-8 group hover:bg-white/20 hover:cursor-pointer flex justify-center items-center rounded-full"
      @click="closeBanner"
    >
      <Icon
        name="ph:x"
        size="20"
      />
    </div>
  </div>
</template>
