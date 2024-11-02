<script lang="ts" setup>
import { projectsTemplates } from '@@/db'

const route = useRoute()

const project = projectsTemplates.find(it => it.slug === route.params.slug)
</script>

<template>
  <div class="h-full">
    <div
      v-if="project"
      class=" h-full flex flex-col"
    >
      <header class="container py-16 relative">
        <NuxtImg
          :src="`images/${project.image}`"
          class="w-full h-44 object-cover rounded-3xl opacity-85 group-hover:opacity-100 mb-16"
        />
        <div class="relative">
          <Badge
            v-if="project.progress === 100"
            variant="outline"
            class=" bg-success absolute -top-8 border-none flex items-center gap-1"
          >
            <Icon

              name="heroicons:check-circle"
            /> Ready
          </Badge>
          <h1 class="text-5xl font-fira">
            {{ project.title }}
          </h1>
          <div class="flex gap-4 mt-4 opacity-50">
            <span>Last updated: {{ project.date_modified }}</span>
            <span>v.{{ project.version }}</span>
          </div>
        </div>

        <div class="mt-8 flex gap-16">
          <div class="flex flex-col gap-8 max-w-2xl">
            <p class="description">
              {{ project.description }}
            </p>

            <div
              v-if="project.authors"
              class="flex gap-4 mt-8"
            >
              <AuthorAvatar
                v-for="author in project.authors"
                :key="author?.id"
                :author="author"
              />
            </div>
          </div>

          <div class="flex-1 border-s border-neutral-900 px-16 flex flex-col gap-8">
            <ProjectFeature :features="project.features" />
            <ProjectHelp
              v-if="project.needs && project.needs.length > 0"
              :needs="project.needs"
            />
            <div v-else>
              <Button
                class=" w-fit bg-success text-black rounded px-4 py-2 flex items-center gap-2"
              >
                Create a project<Icon
                  name="ph:plus-circle-bold"
                  size="24"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main class="bg-white text-black flex-1">
        <div class="container py-16">
          <div class="grid grid-cols-2 gap-16">
            <div class="">
              <h2 class="text-2xl font-bold">
                Problem
              </h2>
              <p>{{ project.problem }}</p>
            </div>
            <div class="">
              <h2 class="text-2xl font-bold">
                Solution
              </h2>
              <p>{{ project.solution }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div v-else>
      <h1>No project</h1>
      <p>Please, try again</p>
    </div>
  </div>
</template>
