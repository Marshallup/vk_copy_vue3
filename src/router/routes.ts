import ProfilePage from '@/pages/ProfilePage.vue'

export const routes = [
  { path: '/', name: 'profilePage', component: ProfilePage },
  {
    path: '/edit',
    name: 'editPage',
    component: () => import('@/pages/EditPage.vue'),
  },
]
