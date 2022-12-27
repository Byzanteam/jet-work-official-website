export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/message_manager',
    name: 'message_manager',
    component: () => import('@/views/solutions/platform/message-manager.vue'),
  },
]
