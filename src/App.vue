<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  const route = useRoute()

  const layoutComponent = computed(() => {
    switch (route.meta.layout) {
      default:
        return DefaultLayout
    }
  })
</script>

<template>
  <div class="dark:text-grey-100 dark:bg-grey-500 font-sans">
    <component :is="layoutComponent" />
  </div>
</template>
