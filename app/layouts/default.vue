<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <AppHeader />
    <main class="flex flex-col">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
