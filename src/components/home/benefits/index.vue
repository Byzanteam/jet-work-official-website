<template>
  <div class="bg-gray-03 dark:bg-gray-08">
    <div class="py-14 md:py-20 content-container">
      <SectionTitle :title="$t('page.home.benefits')" />
      <div class="mt-12 md:mt-[104px]">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
          <BenefitsItem
            v-for="benefit in benefits"
            v-bind="benefit"
            :key="benefit.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsSection',
}
</script>

<script setup>
import { translate } from '../../../locale'
import SectionTitle from '../_title.vue'

import BenefitsItem from './item.vue'

const benefits = [
  'dark_data',
  'customize_components_and_styles',
  'process_customization_node',
  'real_time_application',
].map(item => {
  return {
    image: `${item}.png`,
    label: translate(`page.home.benefits.${item}`),
    description: translate(`page.home.benefits.${item}.description`),
  }
})
</script>
