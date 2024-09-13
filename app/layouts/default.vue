<template>
  <div class="h-screen">
    <header class="border-b p-8">
      <div class="container flex gap-16">
        <nav>
          <ul class="flex gap-8">
            <li>
              <NuxtLink to="/">
                XP CATALYST
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
