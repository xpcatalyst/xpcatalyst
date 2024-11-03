<template>
  <header class="py-6">
    <div class="container flex justify-between text-xl items-center">
      <nav class="flex gap-16 items-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 font-bold font-readex hover:underline underline-offset-2 tracking-wide"
        >
          <Icon
            name="xp:logo"
            class="text-2xl text-white fill-white"
          /> XPCATALYST
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
