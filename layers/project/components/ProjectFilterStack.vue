<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
// import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown } from 'lucide-vue-next'
import { type Option } from '../types/project.types.js'

defineProps<{title: string, options: Option[]}>()

const selectedOptions = ref<Option[]>([])

const isOptionSelected = (option: Option): boolean => {
  return selectedOptions.value?.some(it => it.value === option.value);
};

const handleClear = () => selectedOptions.value = []

const handleOptionUnselected = (option: Option): void => {
  selectedOptions.value = selectedOptions.value.filter(i => i !== option);
};

const handleOptionSelected = (option: Option): void => {
  if( !isOptionSelected(option) ) selectedOptions.value.push(option)
  else selectedOptions.value = selectedOptions.value.filter(i => i.value !== option.value);  
};
</script>

<template>
  <Popover>
    <PopoverTrigger as-child class="hover:bg-transparent px-3">
      <Button variant="outline">{{ title }}
        <template v-if="selectedOptions.length > 0">
          <Separator orientation="vertical" class="mx-2 h-4" />
          <Badge
            variant="secondary"
            class="rounded-sm px-1 font-normal lg:hidden"
          >
            {{ selectedOptions.length }}
          </Badge>
          <div class="hidden space-x-1 lg:flex">
            <Badge
              v-if="selectedOptions.length > 4"
              variant="outline"
              class="rounded-sm px-1 font-normal"
            >
              {{ selectedOptions.length }} selected
            </Badge>
            <template v-else>
              <Badge
                v-for="option in selectedOptions"
                :key="option.value"
                variant="outline"
                class="rounded-sm px-1 font-normal flex space-x-1 hover:bg-secondary"
                @click.stop="handleOptionUnselected(option)"
              >
               <span>{{ option.label }}</span>
               <Icon name="uil:times" class="size-4" />
              </Badge>
            </template>
          </div>
        </template> 
        <ChevronDown v-else class="w-4 h-4 ms-3 opacity-50" />
    </Button> 
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0" align="start">
      <Command>
        <CommandInput :placeholder="title" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem  class="flex items-center space-x-2" v-for="option in options" :key="option.value" :value="option.value" @select="handleOptionSelected(option)">
              <Checkbox id="option.value" :checked="isOptionSelected(option)"/>
              <label>{{ option.label }} ({{ option.nb }})</label>
            </CommandItem>
          </CommandGroup>

          <template v-if="selectedOptions.length > 0">
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                :value="{ label: 'Clear filters' }"
                class="justify-center text-center"
                @select="handleClear"
              >
                Clear filters
              </CommandItem>
            </CommandGroup>
          </template>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
