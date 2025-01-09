<script setup lang="ts">
import type { ButtonVariants } from '.';

const props = defineProps<{
    to: string,
    icon?: string,
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
}>()

const classes = computed(() => `text-${props.size}`)
</script>

<template>
    <NuxtLink :to="to" class="inline-block group">
        <Button class="rounded-full" :class="classes" :variant="variant" :size="size">
            <slot />
            <Icon v-if="icon" :name="icon" class="ms-2 group-hover:translate-x-2 transition-transform" />
        </Button>
    </NuxtLink>
</template>
