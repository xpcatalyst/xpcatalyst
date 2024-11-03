<template>
  <div class="min-h-screen bg-gray-50 py-16 text-black">
    <div class="container grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Profile Section -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex flex-col items-center mb-4">
          <img
            class="w-20 h-20 rounded-full mb-2"
            src="https://via.placeholder.com/80"
            alt="Profile photo"
          >
          <h2 class="text-xl font-semibold">
            Alex Developer
          </h2>
          <p class="text-sm text-gray-600">
            Full Stack Engineer
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
          <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
          <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">TypeScript</span>
        </div>
      </div>

      <!-- Skills Map -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-3">
          Skills Map
        </h3>
        <div class="space-y-3">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Frontend Development</span>
              <span>Advanced</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full w-4/5" />
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Backend Development</span>
              <span>Intermediate</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full w-3/5" />
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>DevOps</span>
              <span>Beginner</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full w-2/5" />
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Goals -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-3">
          Skills Goals
        </h3>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              checked
              class="rounded text-blue-600"
            >
            <span>Master GraphQL and Apollo</span>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="rounded text-blue-600"
            >
            <span>Learn Kubernetes basics</span>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="rounded text-blue-600"
            >
            <span>Contribute to open source</span>
          </div>
        </div>
      </div>

      <!-- Help Offerings -->
      <div class="md:col-span-3 bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-3">
          I Can Help With
        </h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 border rounded-lg">
            <h4 class="font-medium mb-2">
              Development
            </h4>
            <p class="text-sm text-gray-600">
              Frontend development with React, Vue, and modern JavaScript
            </p>
          </div>
          <div class="p-3 border rounded-lg">
            <h4 class="font-medium mb-2">
              Writing
            </h4>
            <p class="text-sm text-gray-600">
              Technical documentation and API specifications
            </p>
          </div>
          <div class="p-3 border rounded-lg">
            <h4 class="font-medium mb-2">
              Specifications
            </h4>
            <p class="text-sm text-gray-600">
              Project requirements and technical specifications
            </p>
          </div>
          <div class="p-3 border rounded-lg">
            <h4 class="font-medium mb-2">
              Testing
            </h4>
            <p class="text-sm text-gray-600">
              User testing and QA processes
            </p>
          </div>
        </div>
      </div>

      <div class="md:col-span-3">
        <UserAdditional />
      </div>
      <!-- Project Matches -->
      <div class="md:col-span-3 bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-3">
          Suggested Project Matches
        </h3>
        <div class="space-y-4">
          <div class="border rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="font-medium">
                  E-commerce Platform
                </h4>
                <p class="text-sm text-gray-600">
                  Matches your React & TypeScript skills
                </p>
              </div>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">90% Match</span>
            </div>
            <p class="text-sm text-gray-600 mb-2">
              Looking for frontend developers with React experience for building modern e-commerce interfaces
            </p>
            <div class="flex gap-2">
              <button class="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Express Interest
              </button>
              <button class="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>

          <div class="border rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="font-medium">
                  Developer Documentation
                </h4>
                <p class="text-sm text-gray-600">
                  Matches your technical writing skills
                </p>
              </div>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">85% Match</span>
            </div>
            <p class="text-sm text-gray-600 mb-2">
              Seeking contributors for improving and maintaining API documentation
            </p>
            <div class="flex gap-2">
              <button class="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Express Interest
              </button>
              <button class="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add your component logic here
</script>
