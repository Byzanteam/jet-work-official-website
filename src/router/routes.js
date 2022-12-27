export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/cms',
    name: 'cms',
    component: () => import('@/views/solutions/platform/cms.vue'),
  },
]
