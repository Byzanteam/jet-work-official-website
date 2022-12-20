<template>
  <div class="text-gray-60 text-center mb-8 md:px-[20%] px-[10%]">
    {{
      $t('page.solutions.scene.approval.solutions.flow.tab.mobile.description')
    }}
  </div>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <CardItem
      v-for="item of cardItems"
      :key="item.title"
      :item="item"
      class="bg-gray-08"
    ></CardItem>
  </div>
</template>

<script setup>
import { translate } from '@/locale'

import CardItem from '../../components/card-item.vue'

const cardItems = ['build', 'component', 'proxy', 'one_thing'].map(key => ({
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.mobile.' + key,
  ),
  desc: translate(
    `page.solutions.scene.approval.solutions.flow.tab.mobile.${key}.description`,
  ),
  img: '/images/approval/mobile_' + key + '.png',
}))
</script>
