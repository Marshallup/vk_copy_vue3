<script setup lang="ts">
  interface IUiButton {
    size?: 'md' | 'sm' | 'xs'
    icon?: boolean
    text?: boolean
    full?: 'h' | 'w' | 'h-w'
  }

  const props = withDefaults(defineProps<IUiButton>(), {
    full: undefined,
    size: 'md',
    icon: false,
    text: false,
  })
  const slots = useSlots()

  const isFullHeight = computed(
    () => props.full === 'h' || props.full === 'h-w'
  )
  const rightIconSlot = computed(() => slots.rightIcon)
</script>

<script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  })
</script>

<template>
  <div :class="{ 'h-full': isFullHeight }">
    <button
      class="cursor-pointer"
      :class="{
        'p-3': !icon && size === 'md',
        'py-2 px-4 text-sm-m rounded-lg': !icon && size === 'sm',
        'h-full': isFullHeight,
        'dark:bg-grey-700': !text,
      }"
      v-bind="$attrs"
    >
      <div :class="{ 'flex items-center': rightIconSlot }">
        <slot />

        <div v-if="rightIconSlot" class="ml-[6px]">
          <slot name="rightIcon" />
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
