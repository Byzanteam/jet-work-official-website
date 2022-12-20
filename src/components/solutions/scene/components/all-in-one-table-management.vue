<template>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_fusion',
      )
    "
  >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of fusionValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_config',
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
  </BlockInLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../../components/block-in-layout.vue'
import ValueCard from '../../components/value-card.vue'

const fusionValueCardItems = ['population', 'space', 'legal'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_fusion.' +
      key,
  ),
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_fusion.' +
      key +
      '.description',
  ),
}))

const updateValueCardItems = [
  'delete',
  'delete_population',
  'data_view',
  'data_sort',
  'field',
  'export',
  'export_delete',
  'exchange',
].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_config.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.management.data_config.${key}.description`,
  ).split('- '),
}))
</script>
