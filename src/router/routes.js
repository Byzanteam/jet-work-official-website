export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/grassroot',
    name: 'grassroot',
    component: () => import('@/views/solutions/scene/grassroot/index.vue'),
  },
]
