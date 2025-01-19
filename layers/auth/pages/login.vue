<script lang="ts" setup>
definePageMeta({
  layout: false,
})

const { loading, signInWithGithub } = useAuth()
</script>

<template>
  <div class="relative h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-500  to-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-50">
      <svg
        class="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="lines"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 4 L4 0"
              stroke="white"
              stroke-width="0.05"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#lines)"
        />
      </svg>
    </div>
    <div class="p-12 bg-white rounded-2xl shadow-lg max-w-sm text-center z-10">
      <h1 class="flex items-center justify-center text-3xl font-semibold  mb-6">
        <Icon
          name="xpc:logo"
          class="w-8 h-8 mr-2"
        />
        XP.CATALYST
      </h1>
      <p class=" mb-6 text-lg">
        Welcome back! Please sign in using your GitHub account.
      </p>
      <LoginButton
        label="Sign in with GitHub"
        :loading="loading"
        @login="signInWithGithub"
      />
      <NuxtLink
        to="/"
        class="block mt-4 hover:underline"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
