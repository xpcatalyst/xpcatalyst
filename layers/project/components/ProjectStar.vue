<script setup lang="ts">
defineProps<{ star?: number }>()
</script>

<template>
    <div class="flex items-center text-xs gap-1">
        <Icon name="uil:star" size="24" />
        {{ star ?? 0 }}
    </div>
</template>
