<template>
  <header class="py-6">
    <div class="container flex justify-between text-xl items-center">
      <nav class="flex gap-16 items-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 font-bold"
        >
          <Icon
            name="xp:logo2"
            class="text-2xl font-readex"
          /> XP Catalyst
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
