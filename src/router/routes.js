export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/data_hub',
    name: 'data_hub',
    component: () => import('@/views/solutions/platform/data-hub/index.vue'),
  },
]
