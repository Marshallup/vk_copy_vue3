<script lang="ts" setup></script>

<template>
  <div class="min-h-screen flex flex-col pb-4">
    <BaseHeader />
    <main class="pt-header-height flex-1">
      <UiContainer>
        <div class="flex w-full items-start pt-4">
          <div>
            <MenuLeft />
          </div>
          <div class="flex-1">
            <RouterView />
          </div>
        </div>
      </UiContainer>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
