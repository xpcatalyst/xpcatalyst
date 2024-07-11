<!-- ProjectListFilterWorkflow.vue -->
<script lang="ts" setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

defineProps<{ options: string[] }>();

const emit = defineEmits(['update:workflow']);

const workflow = ref('');

watch(workflow, (newValue) => {
  emit('update:workflow', newValue === 'all' ? '' : newValue);
});
</script>

<template>
  <Select v-model="workflow" data-test="select-workflow">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a workflow" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Workflow</SelectLabel>
        <SelectItem value="all">All</SelectItem>
        <SelectItem v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
