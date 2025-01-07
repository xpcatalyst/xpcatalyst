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
    <NuxtLink :to="to" class="inline-block ">
        <Button class="rounded-full flex items-center gap-2" :class="classes" :variant="variant" :size="size">
            <slot />
            <Icon v-if="icon" :name="icon" />
        </Button>

    </NuxtLink>
</template>
