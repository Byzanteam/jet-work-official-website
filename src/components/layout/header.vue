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
      <HeaderMenu v-model:isShowMenu="isShowMenuOnMobile"></HeaderMenu>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
