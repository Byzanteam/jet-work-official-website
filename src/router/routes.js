export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/form_engine',
    name: 'form_engine',
    component: () => import('@/views/solutions/platform/form-engine.vue'),
  },
]
