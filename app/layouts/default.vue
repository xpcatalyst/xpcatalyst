<script setup lang="ts">
type NavItem = {
  name: string
  path: string
}

const navItems: NavItem[] = [
  { name: 'XP Catalyst', path: '/' },
  { name: 'Projects', path: '/project' },
  // { name: 'Guide', path: '/guide' },
  // { name: 'Login', path: '/login' },
  // { name: 'Register', path: '/register' },
  // { name: 'Register OTP', path: '/register2' },
  // { name: 'Dashboard', path: '/dashboard' },
]
</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header class="border-b p-8">
      <div class="container flex gap-16">
        <nav>
          <ul class="flex gap-8">
            <li
              v-for="item in navItems"
              :key="item.path"
            >
              <NuxtLink :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="p-8 container">
      <slot />
    </main>
    <footer>
      <div class="py-16 text-center text-sm text-gray-400">
        <p>
          Made with
          <Icon
            name="mdi:heart"
            class="animate-pulse"
          /> by <a
            href="https://dev.jeromeabel.net"
            class="underline hover:text-black"
          >
            J&eacute;r&ocirc;me Abel</a>
          - <a
            href="https://github.com/xpcatalyst/xpcatalyst"
            class="underline hover:text-black"
          >Source Code</a>
        </p>
      </div>
    </footer>
  </div>
</template>
