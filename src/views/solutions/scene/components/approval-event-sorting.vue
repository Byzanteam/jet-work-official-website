<template>
  <div class="text-gray-60 text-center mb-8 md:px-[20%] px-[10%]">
    {{
      $t(
        'page.solutions.scene.approval.solutions.flow.tab.event_sorting.description',
      )
    }}
  </div>
  <div class="flex md:flex-row flex-col gap-6">
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
  'time',
  'begin_work',
  'make_document',
  'ensure_need',
].map(key => ({
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.event_sorting.' + key,
  ),
  desc: translate(
    'page.solutions.scene.approval.solutions.flow.tab.event_sorting.' +
      key +
      '.description',
  ),
}))
</script>
