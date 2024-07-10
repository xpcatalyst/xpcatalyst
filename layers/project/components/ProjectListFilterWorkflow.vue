<script lang="ts" setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { type Workflow } from '../types/project.types.js'

const emit = defineEmits(['update:workflow'])
const workflow = ref('')
const workflowValues = ref<Workflow[]>([
  'draft',
  'public',
  'spec',
  'prototype',
  'challenge',
  'mvp',
  'beta',
  'alpha',
  'archives'
])

// Watch for changes in the selected workflow value
watch(workflow, (newValue) => {
  emit('update:workflow', newValue === 'all' ? '' : newValue)
})
</script>

<template>
  <Select v-model="workflow">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a workflow" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Workflow</SelectLabel>
        <SelectItem value="all">All</SelectItem>
        <SelectItem v-for="(item, index) in workflowValues" :key="index" :value="item">{{ item }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
