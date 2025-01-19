<script lang="ts" setup>
const { user, userData, loading, signInWithGithub, logout } = useAuth()
</script>

<template>
  <UserNav
    v-if="user"
    :user="userData"
    @logout="logout"
  />
  <LoginButton
    v-else
    :loading="loading"
    @login="signInWithGithub"
  />
</template>
