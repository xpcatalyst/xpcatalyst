<script setup lang="ts">
// const emojis = ['🎉', '🌟', '💪', '🚀', '🌈', '🔥', '✨', '🎉', '🌟', '💪', '🚀', '🌈', '🔥', '✨']
const emojis = ['👋', '👋🏿', '👋🏽', '👋🏻', '👋🏾', '👋🏼', '👋', '👋🏿', '👋🏽', '👋🏻', '👋🏾', '👋🏼', '👋', '👋🏿', '👋🏽', '👋🏻', '👋🏾', '👋🏼']
</script>

<template>
  <div class="absolute [mask-image:_linear-gradient(to_right,transparent_0,_black_500px,_black_calc(50%-500px),transparent_100%)] -z-10 w-screen inset-0 overflow-hidden inline-flex flex-col opacity-50 space-y-4">
    <div
      v-for="(emoji, index) in emojis"
      :key="index + 'emoji'"
      class="w-full inline-flex flex-nowrap overflow-hidden"
    >
      <ul
        class="flex items-center [&_li]:mx-8 text-xl animate-infinite-scroll py-2"
        :style="{ animationDuration: `${400 + index * 5}s`, animationDirection: index % 2 === 0 ? 'normal' : 'reverse', opacity: `${100 - index * 2}` }"
      >
        <li
          v-for="i in 40"
          :key="i"
        >
          {{ emoji }}
        </li>
      </ul>
      <ul
        class="flex items-center [&_li]:mx-8 text-xl animate-infinite-scroll py-2"
        :style="{ animationDuration: `${400 + index * 5}s`, animationDirection: index % 2 === 0 ? 'normal' : 'reverse' }"
        aria-hidden="true"
      >
        <li
          v-for="i in 40"
          :key="i + 'copy'"
        >
          {{ emoji }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll linear infinite;
  }
  </style>
