<script setup lang="ts">
  import {
    MagnifyingGlassIcon,
    Square3Stack3DIcon,
  } from '@heroicons/vue/24/solid'
  import { BellIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="fixed top-0 left-0 w-full dark:bg-grey-300 z-10">
    <UiContainer>
      <div class="flex h-header-height">
        <div class="h-full flex">
          <div
            class="dark:text-text-regular-dark h-full flex items-center w-[165px]"
          >
            <VkLogo />
          </div>
        </div>
        <div class="h-full flex items-center pr-4 basis-[245px]">
          <UiInput placeholder="Поиск">
            <template #prepend
              ><div class="dark:text-grey-600">
                <MagnifyingGlassIcon />
              </div>
            </template>
          </UiInput>
        </div>
        <div class="h-full">
          <UiButton full="h" text>
            <div class="w-6 h-6">
              <BellIcon class="fill-transparent dark:stroke-grey-600" />
            </div>
          </UiButton>
        </div>
        <div class="pl-2 h-full flex-1">
          <div class="h-full pr-4">
            <SimplePlayer />
          </div>
        </div>
        <div class="h-full">
          <UiButton full="h" text>
            <Square3Stack3DIcon class="w-6 h-6 dark:fill-grey-600" />
          </UiButton>
        </div>
        <div class="h-full">
          <ProfileDropdown class="pl-2" />
        </div>
      </div>
    </UiContainer>
  </header>
</template>

<style scoped></style>
