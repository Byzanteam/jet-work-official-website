<template>
  <div class="w-full py-16">
    <div class="content-container">
      <SectionTitle
        :title="$t('page.home.features')"
        :description="$t('page.home.features.description')"
      />
      <div
        class="flex flex-col items-stretch md:mt-[104px] mt-12 gap-16 md:gap-24"
      >
        <ApplicationFeature />
        <SaasFeature />
        <PlatformFeature />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  inheritAttrs: false,
}
</script>

<script setup>
import SectionTitle from '../_title.vue'

import ApplicationFeature from './_application.vue'
import PlatformFeature from './_platform.vue'
import SaasFeature from './_saas.vue'
</script>
