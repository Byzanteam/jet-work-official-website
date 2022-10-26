<template>
  <div class="bg-black min-h-screen w-screen flex flex-col items-stretch">
    <HomeHeader />
    <main class="flex-grow">
      <SloganSection />
      <FeaturesSection />
    </main>
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
import FeaturesSection from './features/index.vue'
import HomeFooter from './footer.vue'
import HomeHeader from './header.vue'
import SloganSection from './slogan.vue'
</script>
