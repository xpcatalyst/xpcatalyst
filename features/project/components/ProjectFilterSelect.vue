<script setup lang="ts">
import { Bold, Italic, Underline } from "lucide-vue-next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
</script>

<template>
  <Popover>
    <PopoverTrigger> Open popover </PopoverTrigger>
    <PopoverContent>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </PopoverContent>
  </Popover>
</template>
