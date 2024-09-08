<template>
  <div class="h-screen">
    <header class="border-b p-8">
      <div class="container flex gap-16">
        <span>XP CATALYST</span>
        <nav>
          <ul class="flex gap-8">
            <li>
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/project/">
                Projects
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="p-8 container">
      <slot />
    </main>
  </div>
</template>
