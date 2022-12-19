<template>
  <header class="fixed left-0 right-0 h-[88px] z-50">
    <div class="flex justify-between items-center py-7 content-container">
      <img src="/images/logo_jet.svg" alt="logo" />
      <HeaderMenu></HeaderMenu>
    </div>
  </header>
  <div class="h-[88px] w-full"></div>
</template>

<script setup>
import HeaderMenu from './header_menu.vue'
</script>
