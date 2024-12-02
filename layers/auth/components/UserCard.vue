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

const name = computed(
  () => user.value?.user_metadata.full_name,
)
const profile = computed(
  () => user.value?.user_metadata.avatar_url,
)
</script>

<template>
  <div
    v-if="user"
    class="rounded p-3 flex items-center space-x-3 bg-black text-white border border-white"
  >
    <img
      class="rounded-full w-12 h-12 border-2 border-blue-400"
      :src="profile"
    >
    <div class="text-right">
      <NuxtLink
        to="/dashboard"
        class="hover:underline underline-offset-2"
      >
        {{ name }}
      </NuxtLink>
      <button
        class="text-sm underline text-slate-500"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </div>
</template>
