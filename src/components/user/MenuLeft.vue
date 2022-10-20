<script setup lang="ts">
  import { UserCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <nav class="w-[164px] text-sm-m">
    <ul>
      <li>
        <div>
          <UserCircleIcon />
        </div>
        <div>
          <RouterLink :to="{ name: 'profilePage' }"> Моя страница </RouterLink>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
