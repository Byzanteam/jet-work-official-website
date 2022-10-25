<template>
  <HomeHeader />
  <div class="overflow-scroll bg-black min-h-screen flex flex-col">
    <div class="flex-grow"></div>
    <HomeFooter />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  inheritAttrs: false,
}
</script>

<script setup>
import HomeFooter from './footer.vue'
import HomeHeader from './header.vue'
</script>
