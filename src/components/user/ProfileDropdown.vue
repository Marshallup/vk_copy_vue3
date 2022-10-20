<script setup lang="ts">
  import {
    ChevronDownIcon,
    Cog8ToothIcon,
    QuestionMarkCircleIcon,
    ArrowLeftOnRectangleIcon,
    SwatchIcon,
  } from '@heroicons/vue/24/solid'

  const showDropdown = ref(false)
  const profileDropdownRef = ref<HTMLDivElement | null>(null)

  function onClickAvatar() {
    showDropdown.value = !unref(showDropdown.value)
  }

  onClickOutside(profileDropdownRef, () => {
    showDropdown.value = false
  })
</script>

<template>
  <div ref="profileDropdownRef" class="h-full cursor-pointer">
    <div class="h-full flex items-center" @click="onClickAvatar">
      <div>
        <img
          src="@/assets/images/user/avatar_50_50.jpg"
          width="32"
          height="32"
          class="rounded-full"
        />
      </div>
      <div class="dark:text-grey-600 w-3 ml-[6px] mr-2">
        <ChevronDownIcon />
      </div>
    </div>
    <div class="relative">
      <UiDropdown
        v-model:show="showDropdown"
        :outside-click-hidden="false"
        class="rounded-lg rounded-tr-none rounded-tl-none left-auto right-0 cursor-default"
      >
        <div class="min-w-[250px]">
          <div class="text-sm-m dark:hover:bg-bg-hover-dark cursor-pointer">
            <div class="px-4 py-2 flex items-center">
              <div class="w-[20px] text-sky-300 mr-2">
                <Cog8ToothIcon />
              </div>
              <div>Настройки</div>
            </div>
          </div>
          <div class="text-sm-m">
            <div class="px-4 py-2 flex items-center">
              <div class="w-[20px] text-sky-300 mr-2">
                <SwatchIcon />
              </div>
              <div class="flex items-center">
                <div class="pr-1">Тема:</div>
                <ThemeDropdown />
              </div>
            </div>
          </div>
          <div class="text-sm-m dark:hover:bg-bg-hover-dark cursor-pointer">
            <div class="px-4 py-2 flex items-center">
              <div class="w-[20px] text-sky-300 mr-2">
                <QuestionMarkCircleIcon />
              </div>
              <div>Помощь</div>
            </div>
          </div>
          <div class="text-sm-m dark:hover:bg-bg-hover-dark cursor-pointer">
            <div class="px-4 py-2 flex items-center">
              <div class="w-[20px] text-sky-300 mr-2">
                <ArrowLeftOnRectangleIcon />
              </div>
              <div>Выйти</div>
            </div>
          </div>
        </div>
      </UiDropdown>
    </div>
  </div>
</template>

<style scoped></style>
