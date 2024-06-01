<script lang="ts" setup>
  defineProps<{rate: string}>()
</script>
<template>
  <div class="flex items-center gap-1 text-xs"><Icon name="fe:star" />{{ rate }}</div>
 </template>