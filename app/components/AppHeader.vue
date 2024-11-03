<template>
  <header>
    <AppTopBanner />

    <div class="container flex justify-between text-lg items-center py-4">
      <nav class="flex gap-12 items-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 font-bold font-readex hover:underline underline-offset-2 tracking-wide"
        >
          <Icon
            name="xp:logo"
            class="text-xl text-white fill-white"
          /> XP.CATALYST
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="hover:underline underline-offset-2"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/campus"
          class="hover:underline underline-offset-2"
        >
          Campus
        </NuxtLink>
      </nav>

      <AuthButtons />
    </div>
  </header>
</template>
