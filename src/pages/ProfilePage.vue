<script setup lang="ts"></script>

<template>
  <div>
    <ProfileHeader />

    <div class="flex mt-4 gap-x-2">
      <div class="basis-[550px]">
        <UiModule>
          <ModuleTabs>
            <ModuleTabPanel>
              <ModuleTab icon="img"> Фото </ModuleTab>
            </ModuleTabPanel>

            <ModuleTabItems>
              <ModuleTabItem>
                <UserPhotos />
              </ModuleTabItem>
            </ModuleTabItems>
          </ModuleTabs>
        </UiModule>
      </div>
      <div class="grow basis-[345px]">
        <FriendsList />
      </div>
    </div>
  </div>
</template>
