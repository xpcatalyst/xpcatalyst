<template>
  <header>
    <BaseAppVersion />

    <div class="container flex justify-between text-lg items-center py-8">
      <nav class="flex gap-12 items-center">
        <NuxtLink
          to="/"
          class="font-bold tracking-wide flex items-center gap-2"
        >
          <Icon name="xpc:logo" /> XP.CATALYST
        </NuxtLink>
        <NuxtLink to="/">Projects</NuxtLink>
        <NuxtLink to="/">Guide</NuxtLink>
      </nav>

      <div class="flex gap-6 items-center">
        <BaseToggleColorMode />
        <AuthButton />
      </div>
    </div>
  </header>
</template>
