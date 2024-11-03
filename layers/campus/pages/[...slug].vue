<template>
  <div class="flex container min-h-full">
    <aside class="w-64 border-r border-gray-900 p-4">
      <nav>
        <ContentList
          v-slot="{ list }"
          path="/campus"
        >
          <ul class="space-y-2">
            <li
              v-for="link in list"
              :key="link._path"
            >
              <NuxtLink
                :to="link._path"
                class="block px-4 py-2 rounded hover:bg-gray-800 "
                :class="{ 'bg-gray-800': $route.path === link._path }"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </ContentList>
      </nav>
    </aside>

    <!-- Main content area -->
    <main class="flex-1 p-8 prose prose-lg prose-invert">
      <ContentDoc />
    </main>
  </div>
</template>
