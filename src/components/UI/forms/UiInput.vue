<script setup lang="ts">
  import { getUniqID } from '@/utils/helpers'

  interface IUiInput {
    label?: string
  }

  const slots = useSlots()
  defineProps<IUiInput>()

  const inputRef = ref<HTMLInputElement | null>(null)
  const inputFocused = ref(false)
  const inputID = ref(`input_${getUniqID()}`)

  function focusInput() {
    const inputEl = unref(inputRef)

    if (inputEl && !unref(inputFocused)) {
      inputEl.focus()
    }
  }
  function onFocusInput() {
    inputFocused.value = true
  }
  function onBlurInput() {
    inputFocused.value = false
  }
  function onClickIcon() {
    focusInput()
  }
</script>

<template>
  <div class="text-grey-100">
    <div v-if="label">
      <label :for="inputID" class="block">{{ label }}</label>
    </div>
    <div class="relative">
      <div
        v-if="slots.prepend"
        class="w-4 h-4 absolute top-1/2 left-0 -translate-y-1/2 ml-2 cursor-text"
        @click.prevent="onClickIcon"
      >
        <slot name="prepend" />
      </div>
      <input
        :id="inputID"
        ref="inputRef"
        class="block dark:bg-grey-700 outline-none text-sm h-8 rounded-lg"
        :class="{
          'pl-8': slots.prepend,
          'pl-3': !slots.prepend,
        }"
        v-bind="$attrs"
        @focus="onFocusInput"
        @blur="onBlurInput"
      />
    </div>
  </div>
</template>

<style scoped></style>
