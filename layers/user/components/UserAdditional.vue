<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Availability -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-semibold mb-3">
        Availability
      </h3>
      <div class="space-y-2">
        <p class="flex items-center gap-2">
          <svg
            class="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          1-2 hrs/week - Tuesday, Sunday
        </p>
        <p class="flex items-center gap-2">
          <svg
            class="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Discord: @devhelper
        </p>
        <p class="flex items-center gap-2">
          <svg
            class="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email: dev@example.com
        </p>
      </div>
    </div>

    <!-- Personal Constraints -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-semibold mb-3">
        Personal Constraints
      </h3>
      <div class="space-y-2">
        <p class="flex items-center gap-2 text-sm">
          <svg
            class="w-4 h-4 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          No availability during work hours (9-5 GMT+1)
        </p>
        <p class="flex items-center gap-2 text-sm">
          <svg
            class="w-4 h-4 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Limited to remote collaboration only
        </p>
        <p class="flex items-center gap-2 text-sm">
          <svg
            class="w-4 h-4 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Can only commit to 3-month projects max
        </p>
      </div>
    </div>

    <!-- Projects -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-semibold mb-3">
        Projects
      </h3>
      <div class="space-y-3">
        <div class="border-b pb-2">
          <h4 class="font-medium mb-1">
            Platform Projects
          </h4>
          <div class="space-y-2">
            <a
              href="#"
              class="block text-sm text-blue-600 hover:underline"
            >
              Task Management API
              <span class="text-gray-500">- Active Contributor</span>
            </a>
            <a
              href="#"
              class="block text-sm text-blue-600 hover:underline"
            >
              Community Blog
              <span class="text-gray-500">- Project Lead</span>
            </a>
          </div>
        </div>
        <div>
          <h4 class="font-medium mb-1">
            External Projects
          </h4>
          <div class="space-y-2">
            <a
              href="https://github.com/username/project"
              target="_blank"
              class="flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              Personal Portfolio
            </a>
            <a
              href="https://dev.to/username"
              target="_blank"
              class="flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1.34 1.04-.66.24-.88.26-2.23.26h-1.33v-1.3l1.1-.03 1.1-.04.03-3.18.03-3.19.73-.04.75-.03v6.27c0 6.02.01 6.28.19 6.28.11 0 .21-.07.3-.18z" />
              </svg>
              Tech Blog
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Connected Teams -->
    <div class="bg-white rounded-lg shadow p-4">
      <h3 class="text-lg font-semibold mb-3">
        Connected Teams
      </h3>
      <div class="space-y-3">
        <div class="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
          <img
            class="w-8 h-8 rounded"
            src="https://via.placeholder.com/32"
            alt="Frontend Team"
          >
          <div>
            <h4 class="font-medium">
              Frontend Guild
            </h4>
            <p class="text-sm text-gray-600">
              12 members
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
          <img
            class="w-8 h-8 rounded"
            src="https://via.placeholder.com/32"
            alt="Documentation Team"
          >
          <div>
            <h4 class="font-medium">
              Documentation Team
            </h4>
            <p class="text-sm text-gray-600">
              8 members
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
          <img
            class="w-8 h-8 rounded"
            src="https://via.placeholder.com/32"
            alt="QA Team"
          >
          <div>
            <h4 class="font-medium">
              QA Contributors
            </h4>
            <p class="text-sm text-gray-600">
              15 members
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
