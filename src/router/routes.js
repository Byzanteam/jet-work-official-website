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
  {
    path: '/flow_engine',
    name: 'flow_engine',
    component: () => import('@/views/solutions/platform/flow-engine.vue'),
  },
  {
    path: '/message_manager',
    name: 'message_manager',
    component: () => import('@/views/solutions/platform/message-manager.vue'),
  }
]
