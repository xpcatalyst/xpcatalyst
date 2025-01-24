<script lang="ts" setup>
import { useAuth } from '../composables/useAuth'

definePageMeta({
  layout: false,
})

const { loginGithubText, loading, signIn } = useAuth()
</script>

<template>
  <div class="relative h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-950">
    <div class="p-24 rounded-2xl bg-purple-800 text-white shadow-lg max-w-2xl text-center z-10">
      <h1 class="flex items-center justify-center text-3xl font-semibold mb-2">
        <Icon
          name="xpc:logo"
          class="w-8 h-8 mr-2"
        />
        XP.CATALYST
      </h1>
      <p class="text-lg mb-8">
        Welcome back! <br> Please sign in using your GitHub account.
      </p>
      <div class="flex flex-col items-center justify-center gap-4">
        <LoginButton
          :loading="loading"
          :label="loginGithubText"
          classes="text-xl font-light"
          size="lg"
          @login="signIn"
        />
        <NuxtLink
          to="/"
          class="hover:underline"
        >
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
