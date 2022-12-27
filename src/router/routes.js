export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/flow_engine',
    name: 'flow_engine',
    component: () => import('@/views/solutions/platform/flow-engine.vue'),
  },
]
