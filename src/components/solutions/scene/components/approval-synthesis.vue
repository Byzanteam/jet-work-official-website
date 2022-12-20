<template>
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

const cardItems = ['thinking', 'twin'].map(key => ({
  title: translate(
    'page.solutions.scene.approval.solutions.flow.tab.synthesis.' + key,
  ),
  desc: translate(
    `page.solutions.scene.approval.solutions.flow.tab.synthesis.${key}.description`,
  ),
  img: '/images/approval/synthesis_' + key + '.png',
}))
</script>
