<script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
  import { BellIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="fixed top-0 left-0 w-full dark:bg-grey-300">
    <UiContainer>
      <div class="flex h-header-height">
        <div class="h-full flex">
          <div
            class="dark:text-text-regular-dark h-full flex items-center w-[165px]"
          >
            <VkLogo />
          </div>
        </div>
        <div class="h-full flex items-center pr-4">
          <UiInput>
            <template #prepend> <MagnifyingGlassIcon /> </template>
          </UiInput>
        </div>
        <div class="h-full">
          <UiButton>
            <div class="w-6 h-6">
              <BellIcon class="fill-transparent stroke-grey-600" />
            </div>
          </UiButton>
        </div>
        <div class="h-full">
          <div class="pr-4">
            <SimplePlayer />
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<style scoped></style>
