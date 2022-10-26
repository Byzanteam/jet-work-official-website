<template>
  <div class="bg-black min-h-screen flex flex-col">
    <HomeHeader />
    <div class="flex-grow">
      <HomeBanner />
      <FeaturesSection />
    </div>
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
import HomeBanner from './banner.vue'
import HomeFooter from './footer.vue'
import HomeHeader from './header.vue'
import FeaturesSection from './section/features.vue'
</script>
