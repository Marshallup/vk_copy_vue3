<script setup lang="ts">
  import { PhotoIcon } from '@heroicons/vue/24/solid'

  interface ModuleTabProps {
    icon?: 'img'
  }

  defineProps<ModuleTabProps>()
</script>

<template>
  <div
    class="dark:bg-gray-800 px-2 py-[2px] rounded-lg cursor-pointer ml-3 my-2"
  >
    <div class="min-h-[28px] flex items-center">
      <div v-if="icon" class="w-5 mr-[6px]">
        <PhotoIcon v-if="icon === 'img'" />
      </div>
      <div class="text-sm font-medium">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
