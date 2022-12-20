<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.cms')"
    img="/images/cms/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <ItemList
    :title="$t('page.solutions.platform.cms.article')"
    :items="itemListItems"
  ></ItemList>
  <CardList
    :title="$t('page.solutions.platform.cms.layout')"
    :items="cardsItems"
    class="bg-gray-08"
  ></CardList>
  <BlockLayout :title="$t('page.solutions.platform.cms.experience')">
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

const itemListItems = ['template', 'classify', 'article'].map(value => ({
  icon: `/images/cms/${value}.svg`,
  title: translate(`page.solutions.platform.cms.article.${value}`),
  desc: translate(`page.solutions.platform.cms.article.${value}.description`),
}))

const cardsItems = ['template', 'configable', 'quick'].map(value => ({
  title: translate(`page.solutions.platform.cms.layout.${value}`),
  img: `/images/cms/layout_${value}.png`,
  desc: translate(`page.solutions.platform.cms.layout.${value}.descriptions`),
}))

const selectorItems = ['satisfied', 'magnetism'].map(value => ({
  title: translate('page.solutions.platform.cms.experience.' + value),
  desc: translate(
    `page.solutions.platform.cms.experience.${value}.description`,
  ),
  icon: '/images/cms/' + value + '.svg',
  img: '/images/cms/' + value + '.png',
}))
</script>
