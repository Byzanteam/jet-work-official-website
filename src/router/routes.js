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
  },
  {
    path: '/cms',
    name: 'cms',
    component: () => import('@/views/solutions/platform/cms.vue'),
  },
  {
    path: '/grassroot',
    name: 'grassroot',
    component: () => import('@/views/solutions/scene/grassroot/index.vue'),
  },
  {
    path: '/grid_admin',
    name: 'grid_admin',
    component: () => import('@/views/solutions/scene/grid-admin.vue'),
  },
  {
    path: '/tracking_platform',
    name: 'tracking_platform',
    component: () => import('@/views/solutions/scene/tracking-platform.vue'),
  },
  {
    path: '/supervision',
    name: 'supervision',
    component: () => import('@/views/solutions/scene/supervision.vue'),
  },
  {
    path: '/approval',
    name: 'approval',
    component: () => import('@/views/solutions/scene/approval/index.vue'),
  }
]
