<template>
  <header class="py-6">
    <div class="container flex justify-between text-xl items-center">
      <nav class="flex gap-16 items-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 font-extrabold font-readex  hover:underline underline-offset-2"
        >
          <Icon
            name="xp:logo"
            class="text-2xl"
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
      <div class="flex items-center  rounded-full bg-neutral-100">
        <AuthButtons />
      </div>
    </div>
  </header>
</template>
