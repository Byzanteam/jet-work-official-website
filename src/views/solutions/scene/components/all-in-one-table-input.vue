<template>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_collect',
      )
    "
  >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of collectValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_update',
      )
    "
  >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of updateValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
    <ValueCard :item="updateValueCardItem" class="bg-gray-08 mt-6"></ValueCard>
  </BlockInLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../../components/block-in-layout.vue'
import ValueCard from '../../components/value-card.vue'

const collectValueCardItems = ['add', 'edit'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_collect.' +
      key,
  ),
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_collect.' +
      key +
      '.description',
  ),
}))

const updateValueCardItems = ['data_volume', 'data_state'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_update.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_update.${key}.description`,
  ),
}))
const updateValueCardItem = {
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_update.data_time',
  ),
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input.data_update.data_time.description',
  ),
}
</script>
