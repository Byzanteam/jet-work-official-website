<template>
  <SloganSection />
  <FeatureSection />
  <BenefitsSection />
  <HowItWorkSection />
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
import HowItWorkSection from './how-it-work/index.vue'
import SloganSection from './slogan.vue'
</script>
