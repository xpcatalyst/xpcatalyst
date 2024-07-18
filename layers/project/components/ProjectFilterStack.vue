<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
// import { type Option } from '../types/project.types.js'
//const selectedValues = new Set(["React", "Vue", "Angular"])
const title = "Select Tags"

type Option = {
  label: string
  value: string
}
const options: Option [] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Vercel", value: "vercel" },
  { label: "Astro", value: "astro" },
  { label: "Nuxt", value: "nuxt" }
]

const selectedOptions = ref<Option []>([])
const openMultipleSelect = ref<boolean>(false);

const isOptionSelected = (option: Option): boolean => {
  return selectedOptions.value?.includes(option);
};

const handleOptionUnselected = (option: Option): void => {
  selectedOptions.value = selectedOptions.value.filter(i => i !== option);
};

const handleOptionSelected = (option: Option): void => {
  if( !isOptionSelected(option) ) selectedOptions.value.push(option)
};

</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">{{ title }}

        <!-- <template v-if="selectedValues.length > 0">
          <Separator orientation="vertical" class="mx-2 h-4" />
          <Badge
            variant="secondary"
            class="rounded-sm px-1 font-normal lg:hidden"
          >
            {{ selectedValues.size }}
          </Badge>
          <div class="hidden space-x-1 lg:flex">
            <Badge
              v-if="selectedValues.size > 2"
              variant="secondary"
              class="rounded-sm px-1 font-normal"
            >
              {{ selectedValues.size }} selected
            </Badge>

            <template v-else>
              <Badge
                v-for="option in selectedValue"
                :key="option.value"
                variant="secondary"
                class="rounded-sm px-1 font-normal"
              >
                {{ option.label }}
              </Badge>
            </template>
          </div>
        </template> -->

        <Badge v-for="option in selectedOptions" variant="secondary"
        class="rounded-sm px-1 font-normal":key="option.value" @click="handleOptionUnselected(option)">{{ option.label }}</Badge>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0" align="start">
      <Command>
        <CommandInput :placeholder="title" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem v-for="option in options" :key="option.value" :value="option.value"
              @select="handleOptionSelected(option)">
              <div
                :class="cn(
                  'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                  isOptionSelected(option)
                    ? 'bg-primary text-primary-foreground'
                    : 'opacity-50 [&_svg]:invisible',
                )"
              >
                <Icon name="uil:check" class="size-4" />
              </div>
              <span>{{ option.label }}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>