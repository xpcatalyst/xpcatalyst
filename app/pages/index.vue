<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <!-- Hero Section -->
    <section class="bg-xp-blue text-white py-24">
      <div class="container mx-auto text-center px-4">
        <h1 class="text-5xl font-bold mb-4">
          Catalyze Your Experience, Create Positive Change
        </h1>
        <p class="text-lg max-w-2xl mx-auto mb-8">
          XP Catalyst empowers developers, designers, and project owners to collaborate on impactful, real-world projects
          that make a difference. Whether you're just starting out or looking to contribute your skills, we provide a space for you to thrive.
        </p>
        <a
          href="#join"
          class="bg-xp-orange text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-500"
        >
          Get Started
        </a>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-4xl font-semibold mb-4">
          Stay Updated
        </h2>
        <p class="text-lg mb-6">
          XP Catalyst is growing! Sign up to receive the latest updates and opportunities to collaborate on meaningful projects.
        </p>

        <!-- Newsletter Form -->
        <form
          class="flex justify-center max-w-lg mx-auto"
          @submit.prevent="submitNewsletter"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            class="py-3 px-4 w-full rounded-l-lg text-gray-800 focus:outline-none"
            required
          >
          <button
            type="submit"
            class="bg-xp-orange text-white py-3 px-6 rounded-r-lg shadow-lg hover:bg-orange-500"
          >
            Subscribe
          </button>
        </form>
        <p class="mt-4 text-sm">
          Join our community and help catalyze change.
        </p>
      </div>
    </section>

    <!-- Personas Section -->
    <section
      id="join"
      class="bg-gray-50 py-16"
    >
      <div class="container mx-auto text-center px-4">
        <h2 class="text-4xl font-semibold mb-8">
          Who Is XP Catalyst For?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Aspiring Developer or Designer -->
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-semibold mb-4">
              Aspiring Developer or Designer
            </h3>
            <p class="text-gray-600">
              Build real-world experience by contributing to impactful projects, enhancing your portfolio, and growing your network.
            </p>
            <a
              href="#projects"
              class="text-xp-blue mt-4 inline-block"
            >Explore Projects</a>
          </div>

          <!-- Experienced Developer, Designer, or PM -->
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-semibold mb-4">
              Experienced Professional
            </h3>
            <p class="text-gray-600">
              Share your expertise by mentoring or leading a team, and contribute to projects that make a difference.
            </p>
            <a
              href="#projects"
              class="text-xp-blue mt-4 inline-block"
            >Mentor or Lead a Project</a>
          </div>

          <!-- Non-Profit Project Owner -->
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-semibold mb-4">
              Non-Profit Project Owner
            </h3>
            <p class="text-gray-600">
              Bring your vision to life by collaborating with passionate developers and designers to create impactful software solutions.
            </p>
            <a
              href="#submit-project"
              class="text-xp-blue mt-4 inline-block"
            >Submit a Project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Positive Impact Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-4xl font-semibold mb-4">
          Our Positive Impact
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          By connecting skilled individuals with meaningful projects, XP Catalyst creates real-world solutions for non-profit organizations, while empowering developers and designers to gain invaluable experience.
        </p>
        <a
          href="#projects"
          class="bg-xp-orange text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-500"
        >
          Get Involved
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const submitNewsletter = () => {
  // Handle newsletter form submission
  console.log('Newsletter email submitted:', email.value)
}
</script>

<style scoped>
/* Custom colors for XP Catalyst */
.bg-xp-blue {
  background-color: #bbb3ff;
}

.bg-xp-orange {
  background-color: #f9b27a;
}

.text-xp-blue {
  color: #bbb3ff;
}

.text-xp-orange {
  color: #f9b27a;
}
</style>
