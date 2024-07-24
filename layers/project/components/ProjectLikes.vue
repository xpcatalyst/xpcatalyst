<script lang="ts" setup>
const props = defineProps<{likes: number, projectId: number}>()
const isLiked = ref(false);
const emit = defineEmits(['trigger:like'])
const handleLike = () => {
  emit('trigger:like', props.projectId)
  isLiked.value = !isLiked.value
}
</script>

<template>
  <button class="flex items-center text-xs gap-1" :class="{ 'text-pink-500': isLiked }"  @click="handleLike">
    <Icon v-if="!isLiked" name="mdi:heart-outline" size="24" />
    <Icon v-else name="mdi:heart" size="24" />
    <span>{{ likes ?? 0 }}</span>
  </button>
</template>
