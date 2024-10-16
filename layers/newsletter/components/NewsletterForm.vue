<script setup lang="ts">
import { useForm, ErrorMessage, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: false, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})

// Define your schema
const formSchema = toTypedSchema(z.object({
  email: z.string().email().min(2).max(50),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

// Form submission
const onSubmit = handleSubmit((values, actions) => {
  console.log(values)

  actions.resetField('email')
})
</script>

<template>
  <div class="mx-auto w-fit text-center mt-16">
    <p class="text-base text-gray-800 italic mb-4">
      XP Catalyst is in its early prototype phase. <br>Stay updated and be the first to join our community.
    </p>
    <form
      class="flex items-center group focus-within:ring-2 rounded-3xl focus-within:ring-offset-2 focus-within:ring-black"
      @submit="onSubmit"
    >
      <FormField
        v-slot="{ componentField, meta }"
        name="email"
        :validate-on-blur="!isFieldDirty"
      >
        <FormItem>
          <FormControl>
            <Input
              type="text"
              placeholder="Enter your email"
              v-bind="componentField"
              :class="{
                'text-foreground border-green-500': meta.valid && meta.dirty,
              }"
              class="rounded-s-3xl rounded-e-none ps-6 w-80 focus-visible:ring-0 text-lg"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <Button
        type="submit"
        class="rounded-e-3xl rounded-s-none pe-6 text-lg"
      >
        Subscribe
      </Button>
    </form>
    <p
      class="py-2 h-6"
    >
      <ErrorMessage
        name="email"
        class="text-destructive"
      />
    </p>
  </div>
</template>
