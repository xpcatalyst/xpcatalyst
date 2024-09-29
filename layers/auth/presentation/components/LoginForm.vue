<script setup lang="ts">
import type { ILoginUseCase } from '@@/layers/auth'

const props = defineProps<{
  usecase: ILoginUseCase
}>()

const email = ref('')
const password = ref('')
const isFormValid = computed(() => email.value.trim() !== '' && password.value.trim() !== '')

const handleSubmit = async () => {
  await props.usecase.execute({
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <form
    data-test="login-form"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="email"
      type="email"
      data-test="login-email-input"
      placeholder="Email"
      required
    >
    <input
      v-model="password"
      type="password"
      data-test="login-password-input"
      placeholder="Password"
      required
    >
    <button
      :disabled="!isFormValid"
      type="submit"
      data-test="login-submit-button"
    >
      Login
    </button>
  </form>
</template>
