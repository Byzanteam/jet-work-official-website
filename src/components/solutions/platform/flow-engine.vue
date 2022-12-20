<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.flow_engine')"
    img="/images/flow_engine/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <ItemList
    :title="$t('page.solutions.platform.flow_engine.workflow')"
    :items="itemListItems"
  ></ItemList>
  <CardList
    :title="$t('page.solutions.platform.flow_engine.configable')"
    :items="cardsItems"
    class="bg-gray-08"
  ></CardList>
  <BlockLayout
    :title="$t('page.solutions.platform.flow_engine.improve_efficiency')"
  >
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

const itemListItems = ['field', 'logic', 'policy_map', 'data', 'setting'].map(
  value => ({
    icon: `/images/flow_engine/workflow_${value}.svg`,
    desc: translate(
      `page.solutions.platform.flow_engine.workflow.${value}.description`,
    ),
    title: translate('page.solutions.platform.flow_engine.workflow.' + value),
  }),
)

const cardsItems = ['admin', 'client'].map(value => ({
  title: translate(`page.solutions.platform.flow_engine.configable.${value}`),
  img: `/images/flow_engine/configable_${value}.png`,
  desc: translate(
    `page.solutions.platform.flow_engine.configable.${value}.descriptions`,
  ).split('/'),
}))

const selectorItems = ['efficiency', 'management', 'policy'].map(value => ({
  title: translate(
    'page.solutions.platform.flow_engine.improve_efficiency.' + value,
  ),
  desc: translate(
    `page.solutions.platform.flow_engine.improve_efficiency.${value}.description`,
  ),
  icon: '/images/flow_engine/' + value + '.svg',
  img: '/images/flow_engine/' + value + '.png',
}))
</script>
