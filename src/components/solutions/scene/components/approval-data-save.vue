<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <CardItem
      v-for="item of cardItems"
      :key="item.title"
      :item="item"
      class="bg-gray-08"
    ></CardItem>
  </div>
  <CardOnly :item="cardOnlyItem" class="mt-6 bg-gray-08"></CardOnly>
</template>

<script setup>
import { translate } from '@/locale'

import CardItem from '../../components/card-item.vue'
import CardOnly from '../../components/card-only.vue'

const cardItems = ['concat', 'pra'].map(key => ({
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.data_save.' + key,
  ),
  desc: translate(
    'page.solutions.scene.approval.solutions.flow.tab.data_save.' +
      key +
      '.description',
  ),
  img: '/images/approval/data_save_' + key + '.png',
}))
const cardOnlyItem = {
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.data_save.advance_concat',
  ),
  desc: translate(
    'page.solutions.scene.approval.solutions.flow.tab.data_save.advance_concat.description',
  ),
  img: '/images/approval/data_save_advance_concat.png',
}
</script>
