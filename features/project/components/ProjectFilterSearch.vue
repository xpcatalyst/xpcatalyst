<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
const projectStore = useProjectStore();

// const searchTerm = defineModel<string>({ default: "" });
// projectStore.setSearchTerm(searchTerm.value);
// Define a watcher to trigger the action method when the searchTerm changes
watch(
  () => projectStore.searchTerm,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (newValue, oldValue) => {
    // Call the action method in the projectStore
    projectStore.setSearchTerm(newValue);
  }
);
</script>
<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search"
      v-model="projectStore.searchTerm"
      type="text"
      placeholder="Search projects"
      class="pl-10 rounded-full text-xl py-6 placeholder:text-zinc-400"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground text-zinc-400" />
    </span>
  </div>
</template>
