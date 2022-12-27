export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/supervision',
    name: 'supervision',
    component: () => import('@/views/solutions/scene/supervision.vue'),
  },
]
