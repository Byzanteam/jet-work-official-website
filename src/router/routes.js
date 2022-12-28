export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/approval',
    name: 'approval',
    component: () => import('@/views/solutions/scene/approval/index.vue'),
  },
]
