export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/all_in_one_table',
    name: 'all_in_one_table',
    component: () =>
      import('@/views/solutions/scene/all-in-one-table/index.vue'),
  },
]
