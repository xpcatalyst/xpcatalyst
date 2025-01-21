<script lang="ts" setup>
const colorMode = useColorMode()
const toggle = () => colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
</script>

<template>
  <Button
    :variant="null"
    @click="toggle"
  >
    <Icon
      name="ph:moon-fill"
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Icon
      name="ph:sun-fill"
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
