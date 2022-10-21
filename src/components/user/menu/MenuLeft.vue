<script setup lang="ts">
  import {
    UserCircleIcon,
    NewspaperIcon,
    ChatBubbleOvalLeftIcon,
  } from '@heroicons/vue/24/solid'
</script>

<template>
  <nav class="w-[164px] text-sm-m mr-2">
    <ul>
      <MenuLeftItem title="Моя страница">
        <template #icon>
          <UserCircleIcon />
        </template>
      </MenuLeftItem>
      <MenuLeftItem title="Новости">
        <template #icon>
          <NewspaperIcon />
        </template>
      </MenuLeftItem>
      <MenuLeftItem title="Мессенджер">
        <template #icon>
          <ChatBubbleOvalLeftIcon />
        </template>
      </MenuLeftItem>
    </ul>
  </nav>
</template>

<style scoped></style>
