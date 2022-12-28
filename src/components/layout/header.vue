<template>
  <header
    class="sticky top-0 left-0 right-0 h-[88px] z-50 dark:bg-black bg-white"
  >
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

<script>
export default {
  name: 'LayoutHeader',
  inheritAttrs: false,
}
</script>
<script setup>
import { ref } from 'vue'

import HeaderMenu from './header_menu.vue'

const isShowMenuOnMobile = ref(false)
</script>
