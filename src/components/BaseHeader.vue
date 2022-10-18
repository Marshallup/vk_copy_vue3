<script setup lang="ts">
  import UiContainer from './UI/UiContainer.vue'
  import VkLogo from './UI/Icons/VkLogo.vue'
  import UiInput from './UI/forms/UiInput.vue'
</script>

<template>
  <div class="fixed top-0 left-0 w-full dark:bg-regular-dark">
    <UiContainer>
      <div class="h-header-height flex">
        <div class="dark:text-text-regular-dark h-full flex items-center">
          <VkLogo />
        </div>
      </div>
      <div class="h-full">
        <UiInput />
      </div>
    </UiContainer>
  </div>
</template>

<style scoped></style>
