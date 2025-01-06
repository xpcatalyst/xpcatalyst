<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <BaseAppHeader />
    <main class="flex flex-col">
      <slot />
    </main>
    <BaseAppFooter />
  </div>
</template>
