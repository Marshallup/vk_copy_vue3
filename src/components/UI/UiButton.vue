<script setup lang="ts">
  interface IUiButton {
    size: 'md' | 'sm' | 'xs'
  }

  withDefaults(defineProps<IUiButton>(), {
    size: 'md',
  })
</script>

<template>
  <div class="h-full cursor-pointer" :class="{ 'p-3': size === 'md' }">
    <button class="h-full" v-bind="$attrs"><slot /></button>
  </div>
</template>

<style scoped></style>
