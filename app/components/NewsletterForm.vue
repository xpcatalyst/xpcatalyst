<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class=" container ">
    <p class="text-sm text-gray-500 italic mb-4">
      Early adopters, get some news!
    </p>

    <div class="text-center flex justify-center items-center">
      <Input
        type="email"
        placeholder="Enter your email"
        class="rounded-s-3xl rounded-e-none ps-6 w-80"
      />

      <Button
        variant="default"
        class="rounded-e-3xl rounded-s-none pe-6"
      >
        Subscribe
      </Button>
    </div>
  </div>
</template>
