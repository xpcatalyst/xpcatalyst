<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useNewsletter } from '../composables/useNewsletter'

const { isButtonDisabled, email, subscribe, message } = useNewsletter()
</script>

<template>
  <div class="">
    <p class="text-base mb-4">
      Subscribe to the newsletter to follow the progress.
    </p>
    <form
      class="flex items-center gap-3 rounded-full text-xl w-fit peer border-xp-light-pink border-4 bg-white"
      data-testid="newsletter-form"
      novalidate
      @submit.prevent=""
    >
      <input
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
        "
      >
        Stay Updated
      </button>
    </form>
    <p
      class="py-2 h-6"
      data-testid="newsletter-message peer-invalid:text-red-500"
    >
      {{ message }}
    </p>
  </div>
</template>
