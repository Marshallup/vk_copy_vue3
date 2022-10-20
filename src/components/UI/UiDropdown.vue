<script setup lang="ts">
  interface IUiDropdownProps {
    show: boolean
    outsideClickHidden?: boolean
    pr?: boolean
  }
  interface IUiDropdownEmits {
    (e: 'update:show', val: IUiDropdownProps['show']): void
  }

  const props = withDefaults(defineProps<IUiDropdownProps>(), {
    show: false,
    outsideClickHidden: true,
    pr: false,
  })
  const emit = defineEmits<IUiDropdownEmits>()

  const dropdownRef = ref<HTMLDivElement | null>(null)
  const show = computed({
    get: () => props.show,
    set: (val) => emit('update:show', val),
  })

  onClickOutside(dropdownRef, () => {
    if (props.outsideClickHidden) {
      show.value = false
    }
  })
</script>

<script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  })
</script>

<template>
  <Transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div
      v-if="show"
      ref="dropdownRef"
      class="absolute dark:bg-grey-400 dark:border-grey-700 border top-0 left-0"
      :class="{ 'pt-3 pb-2': !pr }"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped></style>
