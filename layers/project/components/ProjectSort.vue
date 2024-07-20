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
import { type SortOption } from '../types/project.types.js'

const props = defineProps<{ options: SortOption[] }>();

const emit = defineEmits(['update:sort']);

const sortValue = ref('');

watch(sortValue, (newSort) => {
  const [sortField, sortOrder] = newSort.split('-');
  const newSortOption = props.options.find( option => option.value === sortField && option.order === sortOrder);
  emit('update:sort', newSortOption);
});
</script>

<template>
  <Select v-model="sortValue" data-test="select-sort">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Sort" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Workflow</SelectLabel>
        <SelectItem v-for="option in options" :key="`${option.value}-${option.order}`" :value="`${option.value}-${option.order}`">
          {{ option.label }} ({{ option.order }})
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
