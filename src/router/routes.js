export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home/index.vue'),
  },
  {
    path: '/flow_engine',
    name: 'flow_engine',
    component: () => import('@/components/solutions/platform/flow-engine.vue'),
  },
  {
    path: '/form_engine',
    name: 'form_engine',
    component: () => import('@/components/solutions/platform/form-engine.vue'),
  },
  {
    path: '/message_manager',
    name: 'message_manager',
    component: () =>
      import('@/components/solutions/platform/message-manager.vue'),
  },
  {
    path: '/cms',
    name: 'cms',
    component: () => import('@/components/solutions/platform/cms.vue'),
  },
  {
    path: '/data_hub',
    name: 'data_hub',
    component: () => import('@/components/solutions/platform/data-hub.vue'),
  },
  {
    path: '/all_in_one_table',
    name: 'all_in_one_table',
    component: () =>
      import('@/components/solutions/scene/all-in-one-table.vue'),
  },
  {
    path: '/approval',
    name: 'approval',
    component: () => import('@/components/solutions/scene/approval.vue'),
  },
  {
    path: '/grassroot',
    name: 'grassroot',
    component: () => import('@/components/solutions/scene/grassroot.vue'),
  },
  {
    path: '/grid_admin',
    name: 'grid_admin',
    component: () => import('@/components/solutions/scene/grid-admin.vue'),
  },
  {
    path: '/supervision',
    name: 'supervision',
    component: () => import('@/components/solutions/scene/supervision.vue'),
  },
  {
    path: '/tracking_platform',
    name: 'tracking_platform',
    component: () =>
      import('@/components/solutions/scene/tracking-platform.vue'),
  },
]
