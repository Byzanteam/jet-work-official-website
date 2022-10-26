<template>
  <div class="bg-black min-h-screen flex flex-col">
    <HomeHeader />
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
