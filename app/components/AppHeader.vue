<template>
  <header class="py-6">
    <div class="container flex justify-between text-xl items-center">
      <nav class="flex gap-16 items-center">
        <NuxtLink to="/">
          <Icon
            name="tabler:atom-2"
            class="text-4xl"
          />
        </NuxtLink>

        <NuxtLink
          to="/projects"
        >
          Projects
        </NuxtLink>
        <NuxtLink to="/campus">
          Campus
        </NuxtLink>
      </nav>
      <AuthButtons />
    </div>
  </header>
</template>
