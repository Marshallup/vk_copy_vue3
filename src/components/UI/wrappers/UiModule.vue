<script setup lang="ts">
  interface UiModuleProps {
    title?: string
    subText?: string
  }

  defineProps<UiModuleProps>()
</script>

<template>
  <div class="border border-grey-700 rounded-xl dark:bg-grey-350 px-2 py-3">
    <div v-if="title" class="flex items-center font-medium px-3">
      <div class="text-sm mr-1">{{ title }}</div>
      <div v-if="subText" class="text-sm-m text-grey-600">{{ subText }}</div>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
