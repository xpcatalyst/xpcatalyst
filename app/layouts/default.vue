<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto] border">
    <AppHeader />
    <main class="p-8 container border border-red-500">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
