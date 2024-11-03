<script setup lang="ts">
import { useLogin } from '../composables/useLogin'

const { login, email, password, error, isSubmitDisabled, submitButtonText } = useLogin()
</script>

<template>
  <form
    class="max-w-md mx-auto mt-8 p-6 bg-background text-foreground rounded-lg border"
    data-testid="login-form"
    @submit.prevent="login"
  >
    <div class="mb-4">
      <label
        for="email"
        class="block mb-2 text-sm font-medium"
      >
        Email
      </label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        data-testid="login-email"
        class="w-full px-3 py-2 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium"
      >
        Password
      </label>
      <input
        id="password"
        v-model="password"
        type="password"
        required
        data-testid="login-password"
        class="w-full px-3 py-2 bg-input text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
    </div>
    <button
      data-testid="login-submit"
      type="submit"
      class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      :disabled="isSubmitDisabled"
    >
      {{ submitButtonText }}
    </button>
    <p
      data-testid="login-error"
      class="mt-4 text-sm text-red-500 text-center text-foreground h-6"
    >
      {{ error }}
    </p>
  </form>
</template>
