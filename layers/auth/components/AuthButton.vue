<script lang="ts" setup>
import { useAuth } from '../composables/useAuth'

const { user, loginText, loading, signOut, signIn, checkAuth } = useAuth()

onMounted(() => {
  checkAuth()
})
</script>

<template>
  <UserNav
    v-if="user"
    :user="user"
    @logout="signOut"
  />
  <LoginButton
    v-else
    :loading="loading"
    :label="loginText"
    @login="signIn"
  />
</template>
