<script lang="ts" setup>
const props = defineProps<{likes?: number, projectId?: number}>()

const isLiked = ref(false);
const triggerLike = inject('triggerLike') as ((projectId: number) => void);

const handleLike = () => {
    if (triggerLike) {
      if(props.projectId) {
        triggerLike(props.projectId);
        isLiked.value = !isLiked.value;
      }
    }
};
</script>

<template>
  <button class="flex items-center text-xs gap-1" :class="{ 'text-pink-500': isLiked }"  @mousedown.stop="handleLike">
    <Icon v-if="!isLiked" name="mdi:heart-outline" size="24" />
    <Icon v-else name="mdi:heart" size="24" />
    <span data-test="project-likes">{{ likes ?? 0 }}</span>
  </button>
</template>
