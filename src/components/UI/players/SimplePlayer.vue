<script setup lang="ts">
  import { ForwardIcon, PlayIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="px-2">
    <div class="flex items-center">
      <UiButton class="w-6 h-6 text-grey-600" size="xs">
        <ForwardIcon />
      </UiButton>
      <UiButton class="w-6 h-6 text-grey-600" size="xs">
        <PlayIcon />
      </UiButton>
      <UiButton class="w-6 h-6 text-grey-600" size="xs">
        <ForwardIcon />
      </UiButton>
    </div>
  </div>
</template>

<style scoped></style>
