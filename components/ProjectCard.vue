<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { type Project } from '@/data/types';
defineProps<{project: Project}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ project.title }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      {{ project.stack.join(", ")}}
    </CardContent>
    <CardFooter>
      {{ project.stars }}
    </CardFooter>
  </Card>
</template>