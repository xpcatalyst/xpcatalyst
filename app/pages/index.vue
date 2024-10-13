<template>
  <HeroSection />
  <NewsletterForm />
  <NuxtImg
    src="/images/hero2.jpg"
    alt="Background Image"
    class="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
    format="webp"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    :width="1920"
    :height="1080"
  />
</template>
