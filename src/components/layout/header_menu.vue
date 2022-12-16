<template>
  <div class="relative group">
    <div class="h-12 flex items-center" @click="changeMenuState">
      <div class="md:block" :class="{ hidden: isShowMenu }">
        {{ $t('page.solutions') }}
      </div>
      <img
        class="md:hidden"
        :class="{ hidden: !isShowMenu }"
        src="/images/close.svg"
        alt="close"
      />
    </div>
    <div
      class="md:group-hover:flex hidden absolute right-0 top-12 w-auto gap-5 border border-solid rounded-lg shadow-lg"
      :class="scrollBg"
    >
      <div v-for="(menuItem, name) in menu" :key="name" class="px-5 py-3">
        <div class="text-gray-50 py-1 px-2 w-60">{{ $t(name) }}</div>
        <RouterLink
          v-for="value of menuItem"
          :key="value.label"
          :to="value.link"
        >
          <div class="md:hover:bg-gray-10 py-1 px-2 w-60">
            {{ value.label }}
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="md:hidden fixed top-[88px] bottom-0 left-0 right-0 dark:bg-black bg-white"
      :class="{ hidden: !isShowMenu }"
    >
      <div v-for="(menuItem, name) in menu" :key="name" class="px-5 py-3">
        <div class="text-gray-50 py-3 px-2 w-60">{{ $t(name) }}</div>
        <RouterLink
          v-for="value of menuItem"
          :key="value.label"
          :to="value.link"
        >
          <div
            class="md:hover:bg-gray-10 py-3 px-2 w-60"
            @click="changeMenuState"
          >
            {{ value.label }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { translate } from '@/locale'

const props = defineProps({ isShowMenu: { type: Boolean, requeired: true } })
const emit = defineEmits(['update:isShowMenu'])

const menu = {
  'page.solutions.platform': [
    {
      label: translate('page.solutions.platform.flow_engine'),
      link: '/flow_engine',
    },
    {
      label: translate('page.solutions.platform.form_engine'),
      link: '/form_engine',
    },
    {
      label: translate('page.solutions.platform.message_manager'),
      link: '/message_manager',
    },
    { label: translate('page.solutions.platform.cms'), link: '/cms' },
    { label: translate('page.solutions.platform.data_hub'), link: '/data_hub' },
  ],
  'page.solutions.scene': [
    {
      label: translate('page.solutions.scene.grassroot'),
      link: '/grassroot',
    },
    {
      label: translate('page.solutions.scene.tracking_platform'),
      link: '/tracking_platform',
    },
    {
      label: translate('page.solutions.scene.approval'),
      link: '/approval',
    },
    {
      label: translate('page.solutions.scene.all_in_one_table'),
      link: '/all_in_one_table',
    },
    {
      label: translate('page.solutions.scene.grid_admin'),
      link: '/grid_admin',
    },
    {
      label: translate('page.solutions.scene.supervision'),
      link: '/supervision',
    },
  ],
}

const scrollBg = ref('')
function setMenuBg() {
  if (window.scrollY > 0) {
    scrollBg.value = 'dark:bg-black bg-white'
  } else {
    scrollBg.value = ''
  }
}
onMounted(() => window.addEventListener('scroll', setMenuBg))
onUnmounted(() => window.removeEventListener('scroll', setMenuBg))

function changeMenuState() {
  emit('update:isShowMenu', !props.isShowMenu)
}
</script>
