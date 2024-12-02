<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  await navigateTo('/')
}
</script>

<template>
  <div
    v-if="user"
    class="flex flex-row gap-2 items-center"
  >
    <NuxtLink
      to="/dashboard"
      class=" text-white hover:border-white border border-transparent rounded-full grid items-center"
    >
      <Icon
        name="heroicons:user-circle-solid"
        size="28"
      />
    </NuxtLink>
    <button
      class="text-sm underline text-white"
      @click="logout"
    >
      Log out
    </button>
  </div>

  <div
    v-else
    class="flex items-center rounded-full bg-neutral-100"
  >
    <NuxtLink
      to="/login"
      class="ps-4 py-1 pe-2 text-neutral-500 hover:text-black hover:underline underline-offset-2 text-lg"
    >
      Login
    </NuxtLink>
    <NuxtLink
      to="/subscribe"
      class="px-4 py-1 rounded-full bg-black text-white hover:underline underline-offset-2 text-lg"
    >
      Join us
    </NuxtLink>
  </div>
</template>
