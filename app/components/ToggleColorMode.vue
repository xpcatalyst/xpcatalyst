<script lang="ts" setup>
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle theme"
    class="relative flex items-center justify-center"
    @click="toggleTheme"
  >
    <Icon
      name="ph:moon-fill"
      class="h-5 w-5 opacity-100 dark:opacity-0 transition-all"
    />
    <Icon
      name="ph:sun-fill"
      class="absolute h-5 w-5 opacity-0 dark:opacity-100 transition-all"
    />
  </button>
</template>
