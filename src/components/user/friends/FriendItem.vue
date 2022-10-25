<script setup lang="ts">
  interface FriendItemProps {
    name: string
    img: string
  }

  defineProps<FriendItemProps>()
</script>

<template>
  <div>
    <div class="px-2 py-1">
      <img width="64" height="64" :src="img" class="rounded-full" />
    </div>
    <div class="px-1 pt-[2px] pb-2 text-xs font-medium text-center">
      {{ name }}
    </div>
  </div>
</template>

<style scoped></style>
