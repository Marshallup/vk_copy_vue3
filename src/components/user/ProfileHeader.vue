<script setup lang="ts">
  import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="border border-grey-700 rounded-bl-lg rounded-br-lg">
    <div>
      <div
        class="bg-[url('@/assets/images/user/bg-header.jpg')] h-[303px] rounded-tr-lg rounded-tl-lg"
      />
    </div>
    <div class="p-5 rounded-tr-lg rounded-tl-lg -mt-6 dark:bg-grey-300 flex">
      <div class="relative inline-flex z-10 -mt-[95px]">
        <div
          class="absolute dark:bg-grey-900 rounded-full w-[158px] h-[158px] -z-10 -top-1 -left-1 -right-1 -bottom-1"
        />
        <img
          src="@/assets/images/user/avatar_200_200.jpg"
          width="150"
          height="150"
          class="rounded-full"
        />
        <div
          class="w-[13px] h-[13px] rounded-full absolute bg-green-500 right-[14%] bottom-[14%] translate-x-1/2 translate-y-1/2"
        />
      </div>
      <div class="grow">
        <div class="ml-4 flex">
          <div>
            <div class="text-xl font-bold">Михаил Тесля</div>
            <RouterLink
              :to="{ name: 'editPage' }"
              class="mt-1 text-sm-m text-sky-300 flex items-center hover:underline cursor-pointer group"
            >
              <div>Укажите информацию о себе</div>
              <div
                class="w-[12px] mt-1 ml-1 group-hover:translate-x-[3px] transition-transform"
              >
                <ChevronRightIcon />
              </div>
            </RouterLink>
          </div>
          <div class="grow flex justify-end gap-x-[6px]">
            <UiButton size="sm" class="font-medium">
              Редактировать профиль
            </UiButton>
            <UiButton size="sm" class="font-medium">
              Еще
              <template #rightIcon>
                <div class="w-3 mt-1">
                  <ChevronDownIcon />
                </div>
              </template>
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
