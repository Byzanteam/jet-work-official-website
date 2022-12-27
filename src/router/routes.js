export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/tracking_platform',
    name: 'tracking_platform',
    component: () => import('@/views/solutions/scene/tracking-platform.vue'),
  },
]
