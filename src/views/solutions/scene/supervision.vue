<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.supervision')"
    img="/images/supervision/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout
    :title="$t('page.solutions.scene.supervision.questions')"
    :block-desc="$t('page.solutions.scene.supervision.questions.description')"
  >
    <div class="flex flex-col gap-6">
      <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
        <QuestionCardItem
          v-for="item of questionCardItems_part_1"
          :key="item.title"
          :item="item"
        ></QuestionCardItem>
      </div>
      <div class="grid gap-6 md:grid-cols-2 grid-cols-1 md:px-23">
        <QuestionCardItem
          v-for="item of questionCardItems_part_2"
          :key="item.title"
          :item="item"
        ></QuestionCardItem>
      </div>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.supervision.solutions')"
    :block-desc="$t('page.solutions.scene.supervision.solutions.description')"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <h4>
      {{ $t('page.solutions.scene.supervision.solutions.flow') }}
    </h4>
    <img
      class="md:my-14 my-6"
      src="/images/supervision/stand_work_flow.png"
      alt=""
    />
    <h4>
      {{ $t('page.solutions.scene.supervision.solutions.project_function') }}
    </h4>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:my-14 my-6">
      <CardItem
        v-for="item of cardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></CardItem>
    </div>
    <CardOnly class="bg-gray-08" :item="cardOnlyItem"></CardOnly>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.supervision.project_value')"
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ValueCard
        v-for="item of valueCardItems"
        :key="item.title"
        :item="item"
      ></ValueCard>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.supervision.project_advantages')"
  >
    <div class="flex md:flex-row flex-col">
      <IconItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
      ></IconItem>
    </div>
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockLayout from '../components/block-layout.vue'
import CardItem from '../components/card-item.vue'
import CardOnly from '../components/card-only.vue'
import DescCard from '../components/desc-card.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SolutionTitle from '../components/solution-title.vue'
import ValueCard from '../components/value-card.vue'

const questionCardItems_part_1 = [
  'collect_hard',
  'computed_hard',
  'cumbersome',
].map(key => ({
  title: translate('page.solutions.scene.supervision.questions.' + key),
  desc: translate(
    `page.solutions.scene.supervision.questions.${key}.description`,
  ),
}))
const questionCardItems_part_2 = ['watch_hard', 'incomplete'].map(key => ({
  title: translate('page.solutions.scene.supervision.questions.' + key),
  desc: translate(
    `page.solutions.scene.supervision.questions.${key}.description`,
  ),
}))

const cardItems = ['import', 'auto_compute', 'auto_tip', 'special_state'].map(
  key => ({
    title: translate(
      'page.solutions.scene.supervision.solutions.project_function.' + key,
    ),
    desc: translate(
      `page.solutions.scene.supervision.solutions.project_function.${key}.descriptions`,
    ),
    img: '/images/supervision/' + key + '.png',
  }),
)
const cardOnlyItem = {
  title: translate(
    'page.solutions.scene.supervision.solutions.project_function.all_data',
  ),
  desc: translate(
    'page.solutions.scene.supervision.solutions.project_function.all_data.descriptions',
  ),
  img: '/images/supervision/all_data.png',
}

const valueCardItems = ['safe', 'stand_flow', 'manageable', 'data_value'].map(
  key => ({
    title: translate('page.solutions.scene.supervision.project_value.' + key),
    desc: translate(
      `page.solutions.scene.supervision.project_value.${key}.description`,
    ),
  }),
)

const itemListItems = ['private', 'parallel', 'customizable', 'iteration'].map(
  key => ({
    title: translate(
      'page.solutions.scene.supervision.project_advantages.' + key,
    ),
    desc: translate(
      `page.solutions.scene.supervision.project_advantages.${key}.description`,
    ),
    icon: '/images/supervision/' + key + '.svg',
  }),
)
</script>
