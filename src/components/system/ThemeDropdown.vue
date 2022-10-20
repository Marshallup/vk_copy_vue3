<script setup lang="ts">
  import { SYSTEM_THEME } from '@/enums/system'
  import { THEMES, TTheme } from '@/constants/system'

  const themes = ref(THEMES)
  const currentTheme = ref<TTheme>(SYSTEM_THEME)
  const themeDropdownRef = ref<HTMLDivElement | null>(null)
  const themeDrodown = ref(false)

  function onClickDropdown() {
    themeDrodown.value = !unref(themeDrodown)
  }

  function onClickTheme(theme: TTheme) {
    if (theme.value !== unref(currentTheme).value) {
      currentTheme.value = theme
      themeDrodown.value = false
    }
  }

  onClickOutside(themeDropdownRef, () => {
    themeDrodown.value = false
  })
</script>

<template>
  <div ref="themeDropdownRef" class="relative">
    <div
      class="text-sky-300 hover:underline cursor-pointer"
      @click="onClickDropdown"
    >
      {{ currentTheme.label }}
    </div>

    <UiDropdown
      v-model:show="themeDrodown"
      :outside-click-hidden="false"
      pr
      class="pt-0 pb-0 top-auto -bottom-[5px] -left-[9px] rounded-sm"
    >
      <div class="text-sky-300 min-w-[100px] select-none">
        <div>
          <div
            v-for="theme in themes"
            :key="theme.value"
            class="px-2 py-1 hover:bg-white-alpha8 cursor-pointer"
            :class="{
              'bg-white-alpha8 cursor-default':
                currentTheme.value === theme.value,
            }"
            @click="onClickTheme(theme)"
          >
            {{ theme.label }}
          </div>
        </div>
        <div class="px-2 py-1 bg-white-alpha8">{{ currentTheme.label }}</div>
      </div>
    </UiDropdown>
  </div>
</template>

<style scoped></style>
