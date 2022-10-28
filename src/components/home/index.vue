<template>
  <div
    class="bg-black min-h-screen w-screen flex flex-col items-stretch overflow-x-hidden"
  >
    <HomeHeader />
    <main class="flex-grow">
      <SloganSection />
      <FeatureSection />
      <BenefitsSection />
      <HowItWorkSection />
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
import BenefitsSection from './benefits/index.vue'
import FeatureSection from './features/index.vue'
import HomeFooter from './footer.vue'
import HomeHeader from './header.vue'
import HowItWorkSection from './how-it-work/index.vue'
import SloganSection from './slogan.vue'
</script>
