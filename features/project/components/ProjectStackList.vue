<script setup lang="ts">
import { type ITech } from "../";
defineProps<{ stack?: Array<ITech> }>();
// id ???? for key
</script>

<template>
  <div v-for="(tech, index) in stack" :key="`${tech.category}-${index}-stack`">
    <span>{{ tech.category }}: </span>
    <BaseBadge>{{ tech.name }}</BaseBadge>
  </div>
</template>
