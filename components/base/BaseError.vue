<script lang="ts" setup>
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

defineProps<{ error?: string }>()
</script>

<template>
  <Alert variant="destructive" data-test="alert-error">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{{ error }}</AlertDescription>
  </Alert>
</template>