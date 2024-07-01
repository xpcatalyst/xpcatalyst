<script lang="ts" setup>
defineProps<{ stars: number }>()
</script>
<template>
  <div class="flex items-center text-xs gap-1">
    <Icon name="material-symbols:star-rate-rounded" size="24" />
    {{ stars }}
  </div>
</template>
