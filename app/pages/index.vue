<script setup lang="ts">
// console.log('Supabase URL:', process.env.SUPABASE_URL)
// console.log('Supabase Key:', process.env.SUPABASE_KEY)

// const config = useRuntimeConfig()
// console.log('Supabase URL2:', config.public.supabaseUrl)
// console.log('Supabase Key2:', config.public.supabaseKey)
</script>

<template>
  <HeroSection />
  <NuxtImg
    src="/images/hero-min.jpg"
    alt="Background Image"
    class="fixed inset-0 w-full h-full object-cover opacity-50 invert -z-10"
    format="webp"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    :width="1920"
    :height="1536"
  />
</template>
