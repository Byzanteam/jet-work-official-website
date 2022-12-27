export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/grid_admin',
    name: 'grid_admin',
    component: () => import('@/views/solutions/scene/grid-admin.vue'),
  },
]
