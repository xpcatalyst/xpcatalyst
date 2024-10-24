<script setup lang="ts">
import { useNewsletter } from '../composables/useNewsletter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const { isButtonDisabled, success, email, subscribe, message } = useNewsletter()
</script>

<template>
  <p class="text-base mb-4">
    Subscribe to the newsletter to follow the progress.
  </p>
  <form
    class="flex items-center focus-within:ring-2 rounded-3xl focus-within:ring-offset-2 focus-within:ring-black"
    data-testid="newsletter-form"
    @submit.prevent="subscribe"
  >
    <Input
      v-model="email"
      required
      type="email"
      placeholder="Enter your email"
      data-testid="newsletter-email"
      :class="success ? 'text-foreground border-success': 'text-error border-error'"
      class="rounded-s-3xl rounded-e-none ps-6 w-80 focus-visible:ring-0 text-lg"
    />
    <Button
      type="submit"
      data-testid="newsletter-submit"
      class="rounded-e-3xl rounded-s-none pe-6 text-lg"
      :disabled="isButtonDisabled"
    >
      Stay Updated
    </Button>
  </form>
  <p
    class="py-2 h-6"
    data-testid="newsletter-message"
  >
    {{ message }}
  </p>
</template>
