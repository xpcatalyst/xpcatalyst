<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gradient-to-tr from-xp-light-green">
    <AppHeader />
    <main class="flex flex-col">
      <slot />
    </main>
    <AppFooter />
    <NuxtImg
      src="/images/hero.jpg"
      alt="Background Image"
      class="absolute inset-0 w-full h-full object-cover -z-10 opacity-50 blur-sm"
      format="webp"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      :width="1920"
      :height="1080"
    />
  </div>
</template>
