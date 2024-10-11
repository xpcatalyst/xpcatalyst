<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const navItems = [
  { name: 'XP Catalyst', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Campus', path: '/campus' },
]
</script>

<template>
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
      <AuthButtons />
    </div>
  </header>
</template>
