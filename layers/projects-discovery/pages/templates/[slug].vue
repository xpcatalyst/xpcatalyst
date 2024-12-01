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
        <div class="relative">
          <Badge
            v-if="project.progress === 100"
            variant="outline"
            class=" bg-success absolute -top-8 border-none flex items-center gap-1"
          >
            <Icon name="heroicons:check-circle" /> Complete
          </Badge>
          <h1 class="text-5xl font-fira">
            {{ project.title }}
          </h1>
          <ProjectProgress
            v-if="project.progress !== 100"
            :progress="project.progress"
          />
          <div class="flex gap-4 mt-4 text-neutral-500">
            <span>Last updated: {{ project.date_modified }}</span>
            <span>v.{{ project.version }}</span>
            <span class="flex items-center gap-1"><Icon name="ph:heart-fill" />{{ project.likes }}</span>
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
              <div>Source: </div>
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
                class=" w-fit bg-success text-black hover:text-success border border-success rounded px-4 py-2 flex items-center gap-2"
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
            <div v-if="project.projects && project.projects.length > 0">
              <h2 class="text-2xl font-bold">
                Projects
              </h2>
              <ul>
                <li
                  v-for="p in project.projects"
                  :key="p?.id"
                >
                  {{ p?.title }}
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-2xl font-bold">
                Audience
              </h2>
              <p>{{ project.audience.join(", ") }}</p>
            </div>
            <div class="">
              <h2 class="text-2xl font-bold">
                Problem
              </h2>
              <MDC
                :value=" project.problem"
                tag="article"
              />
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
