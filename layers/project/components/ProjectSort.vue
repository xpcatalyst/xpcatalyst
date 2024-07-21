<!-- ProjectListFilterWorkflow.vue -->
<script lang="ts" setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
      <SelectValue placeholder="Sort By" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
      <SelectLabel>Sort By</SelectLabel>
        <SelectItem v-for="option in options" :key="`${option.value}-${option.order}`" :value="`${option.value}-${option.order}`">
          <Icon v-if="option.order === 'asc'" name="mdi:arrow-up" class="size-4 opacity-50 align-middle" />
          <Icon v-else name="mdi:arrow-down" class="size-4 opacity-50 align-middle" />
          <span class="ms-2">{{ option.label }}</span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
