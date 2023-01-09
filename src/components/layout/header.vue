<template>
  <header class="sticky top-0 left-0 right-0 h-[88px] z-50" :class="scrollBg">
    <div class="flex justify-between items-center py-7 content-container">
      <RouterLink to="/">
        <img
          src="/images/logo_jet.svg"
          alt="logo"
          @click="isShowMenuOnMobile = false"
        />
      </RouterLink>
      <HeaderMenu v-model:isShowMenu="isShowMenuOnMobile" class="flex-1" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  inheritAttrs: false,
}
</script>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { SvgIcon } from '@/components'

import HeaderMenu from './header_menu.vue'

const isShowMenuOnMobile = ref(false)

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
</script>
