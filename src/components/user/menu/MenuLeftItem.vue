<script setup lang="ts">
  import { Cog8ToothIcon } from '@heroicons/vue/24/solid'

  interface MenuLeftItemProps {
    title: string
  }

  defineProps<MenuLeftItemProps>()

  const isCanShowSettingIcon = ref(false)
  const showSettingIcon = ref(false)

  const debounceShowSettingIcon = useDebounceFn(() => {
    if (unref(isCanShowSettingIcon)) {
      showSettingIcon.value = true
    }
  }, 1000)

  function onMouseEnter() {
    debounceShowSettingIcon()
    isCanShowSettingIcon.value = true
  }

  function onMouseLeave() {
    showSettingIcon.value = false
    isCanShowSettingIcon.value = false
  }
</script>

<template>
  <li
    class="h-[30px] relative"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="showSettingIcon"
        class="absolute px-1 py-2 top-1/2 -left-[7px] -translate-y-1/2 -translate-x-1/2 text-grey-600"
      >
        <div class="w-[14px] cursor-pointer">
          <Cog8ToothIcon />
        </div>
      </div>
    </Transition>

    <div
      class="flex items-center hover:bg-white-alpha8 px-[6px] rounded-sm cursor-pointer h-full"
    >
      <div class="w-[20px] mr-[10px] text-sky-300">
        <slot name="icon" />
      </div>
      <div>
        <RouterLink :to="{ name: 'profilePage' }">{{ title }} </RouterLink>
      </div>
    </div>
  </li>
</template>

<style scoped></style>
