<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.form_engine')"
    img="/images/form_engine/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <ItemList
    :title="$t('page.solutions.platform.form_engine.data_acquisition')"
    :items="itemListItems"
  ></ItemList>
  <CardList
    :title="$t('page.solutions.platform.form_engine.multi_fields_quick_config')"
    :items="cardsItems"
    class="bg-gray-08"
  ></CardList>
  <BlockLayout :title="$t('page.solutions.platform.form_engine.collect_data')">
    <SelectorList
      :items="selectorItems"
      class="md:mb-[183px] mb-9"
    ></SelectorList>
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockLayout from '../components/block-layout.vue'
import SelectorList from '../components/selector-list.vue'
import SolutionTitle from '../components/solution-title.vue'

import CardList from './components/card-list.vue'
import ItemList from './components/item-list.vue'

const itemListItems = [
  'form_field',
  'form_statistics',
  'form_handle',
  'form_logic',
].map(value => ({
  icon: `/images/form_engine/${value}.svg`,
  desc: translate(
    `page.solutions.platform.form_engine.data_acquisition.${value}.description`,
  ),
  title: translate(
    'page.solutions.platform.form_engine.data_acquisition.' + value,
  ),
}))

const cardsItems = ['admin', 'client'].map(value => ({
  title: translate(
    `page.solutions.platform.form_engine.multi_fields_quick_config.${value}`,
  ),
  img: `/images/form_engine/multi_fields_${value}.png`,
  desc: translate(
    `page.solutions.platform.form_engine.multi_fields_quick_config.${value}.descriptions`,
  ).split('/'),
}))

const selectorItems = ['data_share', 'improve_efficiency', 'simplify'].map(
  value => ({
    title: translate(
      'page.solutions.platform.form_engine.collect_data.' + value,
    ),
    desc: translate(
      `page.solutions.platform.form_engine.collect_data.${value}.description`,
    ),
    icon: '/images/form_engine/' + value + '.svg',
    img: '/images/form_engine/' + value + '.png',
  }),
)
</script>
