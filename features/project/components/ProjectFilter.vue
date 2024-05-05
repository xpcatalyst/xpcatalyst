<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";

const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="bg-slate-100 p-4 flex gap-4">
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="search"
        v-model="model"
        type="text"
        placeholder="Search projects"
        class="pl-10 rounded-full text-xl py-6 placeholder:text-zinc-400"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground text-zinc-400" />
      </span>
    </div>
  </div>
</template>
