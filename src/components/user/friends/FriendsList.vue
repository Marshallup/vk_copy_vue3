<script setup lang="ts"></script>

<template>
  <div class="border border-grey-700 rounded-xl dark:bg-grey-350 px-2 py-3">
    <div class="flex items-center font-medium px-3">
      <div class="text-sm mr-1">Друзья</div>
      <div class="text-sm-m text-grey-600">140</div>
    </div>
    <div class="px-1 mt-4 flex">
      <FriendItem name="Владимир" />
      <FriendItem name="Руслана" />
    </div>
  </div>
</template>

<style scoped></style>
