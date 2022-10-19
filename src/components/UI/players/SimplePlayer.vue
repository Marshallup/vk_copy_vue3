<script setup lang="ts">
  import { ForwardIcon, PlayIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="h-full flex items-center px-2 dark:text-grey-600">
    <div class="h-full flex items-center gap-x-2">
      <UiButton class="py-2" icon>
        <ForwardIcon class="w-6 h-6" />
      </UiButton>
      <UiButton class="py-2" icon>
        <PlayIcon class="w-6 h-6" />
      </UiButton>
      <UiButton class="py-2" icon>
        <ForwardIcon class="w-6 h-6" />
      </UiButton>
    </div>
    <div class="pl-4">
      <div class="text-sm">Poets of the Fall — Late Goodbye</div>
    </div>
  </div>
</template>

<style scoped></style>
