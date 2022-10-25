<script setup lang="ts">
  interface UserPhotoProps {
    img?: string
  }

  withDefaults(defineProps<UserPhotoProps>(), {
    img: '/images/user/photos/1.jpg',
  })
</script>

<template>
  <div class="ml-[2px] mt-[2px] relative pt-[126px] w-[126px]">
    <img
      width="126"
      height="126"
      :src="img"
      class="absolute left-0 top-0 w-full h-full object-cover"
    />
  </div>
</template>

<style scoped></style>
