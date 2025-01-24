<script setup lang="ts">
import * as z from 'zod'
import { toast } from '@/components/ui/toast'

const { user, checkAuth } = useAuth()

definePageMeta({
  middleware: 'auth',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema = shallowRef<z.ZodObject< any, any, any > | null>(null) // ? avoid any

onMounted (async () => {
  await checkAuth()

  // Wait to set default values
  schema.value = z.object({
    username: z
      .string()
      .min(2, { message: 'Username must be at least 2 characters.' })
      .max(30, { message: 'Username must not be longer than 30 characters.' })
      .default(user.value?.name ?? ''),
    email: z
      .string()
      .email()
      .default(user.value?.email ?? ''),
    bio: z
      .string()
      .max(200, { message: 'Bio must not be longer than 200 characters.' })
      .min(4, { message: 'Bio must be at least 4 characters.' })
      .optional(),
  })
})

const onSubmit = (_values: Record<string, unknown>) => {
  toast({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
  })
}
</script>

<template>
  <section class="container">
    <div>
      <h3 class="text-lg font-medium">
        Profile
      </h3>
      <p class="text-sm text-muted-foreground">
        This is how others will see you on the site.
      </p>
    </div>
    <Separator
      class="my-8"
    />
    <AutoForm
      v-if="schema"
      class="max-w-lg space-y-6"
      :schema="schema"
      :field-config="{
        bio: {
          component: 'textarea',
        },
      }"
      @submit="onSubmit"
    >
      <Button type="submit">
        Update profile
      </Button>
    </AutoForm>
    <div v-else>
      Loading...
    </div>
  </section>
</template>
