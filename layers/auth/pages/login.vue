<script lang="ts" setup>
import { useAuth } from '../composables/useAuth'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

definePageMeta({
  layout: false,
})

const { loginGithubText, loading, signIn, checkAuth } = useAuth()

onMounted(async () => {
  await checkAuth()
})
</script>

<template>
  <div class="h-screen w-screen flex">
    <div class="dark:bg-neutral-800 bg-neutral-500 p-16 w-1/2 lg:full">
      <header>
        <NuxtLink
          to="/"
          class="font-bold tracking-wide flex items-center gap-4 text-2xl uppercase"
        >
          <Icon name="xpc:logo" /> Xp.Catalyst
        </NuxtLink>
      </header>
      <section class="flex items-center justify-center h-full">
        <div class="max-w-lg">
          <div class="flex flex-col gap-6 border rounded-xl p-8 border-muted-foreground">
            <div>
              <h1 class="text-2xl font-semibold tracking-tight">
                Welcome back!
              </h1>
              <p class="text-sm text-muted-foreground">
                Sign in to your account
              </p>
            </div>

            <LoginButton
              :loading="loading"
              :label="loginGithubText"
              size="lg"
              @login="signIn"
            />
          </div>
          <p class="text-sm text-muted-foreground mt-4">
            Don't have an account? <NuxtLink
              to="/register"
              class="underline underline-offset-4 hover:text-primary"
            >
              Register here
            </NuxtLink>
          </p>
        </div>
      </section>
    </div>

    <div class="flex justify-center items-center flex-1 p-24">
      <div class="flex flex-col gap-6">
        <blockquote class="italic text-3xl font-serif max-w-2xl relative before:content-['\201C'] before:text-8xl before:text-neutral-600 before:absolute before:-top-10 before:-left-12">
          Many job postings require 2+ years of experience. XP Catalyst is designed to bridge the experience gap by providing a community platform where you can build real-world projects in collaborative teams."
        </blockquote>
        <footer class="text-sm text-muted-foreground flex items-center gap-4 ms-16">
          <Avatar>
            <AvatarImage
              src="/jerome.png"
              alt="User Avatar"
            />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <div>
            <p>Jérôme Abel,</p>
            <p>Founder of xpatalyst.dev</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
