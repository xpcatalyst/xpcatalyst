<script setup lang="ts">
import { useNewsletter } from '../composables/useNewsletter'

const { isButtonDisabled, email, subscribe, message } = useNewsletter()
</script>

<template>
  <section>
    <p class="text-lg mb-4">
      Subscribe to the monthly newsletter to follow the progress and be part of the journey.
    </p>
    <form
      class="flex items-center gap-3 rounded-full peer text-xl w-fit peer border-xp-light-pink border-4 bg-white"
      data-testid="newsletter-form"
      novalidate
      @submit.prevent="subscribe"
    >
      <input
        v-model="email"
        required
        type="email"
        placeholder="Enter your email"
        data-testid="newsletter-email"
        class="
        w-80 ms-6 py-1 bg-white text-black border-transparent border-b-2
         ring-transparent outline-none focus:border-black
         invalid:[&:not(:focus)]:text-error invalid:[&:not(:placeholder-shown):not(:focus)]:border-error
         "
      >
      <button
        type="submit"
        data-testid="newsletter-submit"
        class="rounded-full ps-6 pe-6 py-3 bg-xp-light-pink text-black
        focus-within:ring-black outline-none ring-2 ring-xp-light-pink
        disabled:cursor-not-allowed
        "
        :disabled="isButtonDisabled"
      >
        Stay Updated
      </button>
    </form>
    <p
      class="py-2 h-6 text-lg text-error peer-focus-within:opacity-0 transition-opacity ease-out duration-300"
      data-testid="newsletter-message"
    >
      {{ message }}
    </p>
  </section>
</template>
