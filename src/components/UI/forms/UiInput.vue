<script setup lang="ts">
  import { getUniqID } from '@/utils/helpers'

  const inputID = ref(`input_${getUniqID()}`)
</script>

<template>
  <div>
    <label :for="inputID">label</label>
    <input :id="inputID" />
  </div>
</template>

<style scoped></style>
