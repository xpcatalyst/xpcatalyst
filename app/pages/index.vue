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
