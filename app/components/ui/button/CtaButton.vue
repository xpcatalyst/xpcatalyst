<script setup lang="ts">
import type { ButtonVariants } from ".";

const props = defineProps<{
    to: string;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
}>();

const sizeClass = computed(() => props.size ? `text-${props.size}` : 'text-base');
</script>

<template>
    <NuxtLink :to="to" class="inline-block">
        <Button :class="['rounded-full', sizeClass]" :variant="variant" :size="size">
            <slot />
        </Button>
    </NuxtLink>
</template>
