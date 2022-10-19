<script setup lang="ts">
  interface IUiButton {
    size?: 'md' | 'sm' | 'xs'
    icon?: boolean
  }

  withDefaults(defineProps<IUiButton>(), {
    size: 'md',
    icon: false,
  })
</script>

<script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  })
</script>

<template>
  <div class="h-full cursor-pointer" :class="{ 'p-3': !icon }">
    <button class="h-full" v-bind="$attrs"><slot /></button>
  </div>
</template>

<style scoped></style>
