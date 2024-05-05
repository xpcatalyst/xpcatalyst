<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="bg-slate-100 p-4">
    <input
      v-model="model"
      class="bg-white border p-4 text-xl"
      type="text"
      placeholder="Search projects"
    />
  </div>
</template>
