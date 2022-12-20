<template>
  <div class="text-gray-60 text-center mb-8 md:px-[25%] px-[10%]">
    {{
      $t(
        'page.solutions.scene.approval.solutions.flow.tab.building.description',
      )
    }}
  </div>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <ValueCard
      v-for="item of valueCardItems"
      :key="item.title"
      :item="item"
      class="bg-gray-08"
    ></ValueCard>
  </div>
</template>

<script setup>
import { translate } from '@/locale'

import ValueCard from '../../components/value-card.vue'

const valueCardItems = [
  'make_plan',
  'content_wrok',
  'app_work',
  'business_work',
  'service_work',
  'evaluation_work',
].map(key => ({
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.building.' + key,
  ),
  desc: translate(
    'page.solutions.scene.approval.solutions.flow.tab.building.' +
      key +
      '.description',
  ),
}))
</script>
