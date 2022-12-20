<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.message_manager')"
    img="/images/message_manager/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <ItemList
    :title="$t('page.solutions.platform.message_manager.send_message')"
    :items="itemListItems"
  ></ItemList>
  <CardOnly
    :title="$t('page.solutions.platform.message_manager.message_pipe')"
    :item="cardItem"
    class="bg-gray-08"
  ></CardOnly>
  <BlockLayout :title="$t('page.solutions.platform.message_manager.users')">
    <SelectorList
      :items="selectorItems"
      class="md:mb-[183px] mb-9"
    ></SelectorList>
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockLayout from '../components/block-layout.vue'
import CardOnly from '../components/card-only.vue'
import SelectorList from '../components/selector-list.vue'
import SolutionTitle from '../components/solution-title.vue'

import ItemList from './components/item-list.vue'

const itemListItems = ['message', 'ensure', 'setting'].map(value => ({
  icon: `/images/message_manager/${value}.svg`,
  desc: translate(
    `page.solutions.platform.message_manager.send_message.${value}.description`,
  ),
  title: translate(
    'page.solutions.platform.message_manager.send_message.' + value,
  ),
}))

const cardItem = {
  title: translate(
    `page.solutions.platform.message_manager.message_pipe.individualization`,
  ),
  img: `/images/message_manager/individualization.png`,
  desc: translate(
    `page.solutions.platform.message_manager.message_pipe.individualization.descriptions`,
  ).split('/'),
}

const selectorItems = ['quick', 'improve'].map(value => ({
  title: translate('page.solutions.platform.message_manager.users.' + value),
  desc: translate(
    `page.solutions.platform.message_manager.users.${value}.description`,
  ),
  icon: '/images/message_manager/' + value + '.svg',
  img: '/images/message_manager/' + value + '.png',
}))
</script>
