<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.grid_admin')"
    img="/images/grid_admin/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.scene.grid_admin.questions')">
    <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
      <QuestionCardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
      ></QuestionCardItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grid_admin.solutions')"
    :block-desc="$t('page.solutions.scene.grid_admin.solutions.description')"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout
      :title="$t('page.solutions.scene.grid_admin.solutions.flow')"
    >
      <div class="flex md:flex-row flex-col gap-6 md:my-14 my-6">
        <DescCard
          v-for="item of descCardItems"
          :key="item.title"
          :item="item"
          class="dark:bg-black bg-white"
        ></DescCard></div
    ></BlockInLayout>
    <BlockInLayout
      :title="$t('page.solutions.scene.grid_admin.solutions.project_function')"
    >
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:my-14 my-6">
        <CardItem
          v-for="item of cardItems"
          :key="item.title"
          :item="item"
        ></CardItem>
      </div>
      <CardOnly :item="cardOnlyItem"></CardOnly>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grid_admin.project_value')"
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <CardItem
        v-for="item of valueCardItems"
        :key="item.title"
        :item="item"
      ></CardItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grid_admin.project_advantages')"
  >
    <div class="grid md:grid-cols-2 grid-cols-1">
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

import BlockInLayout from '../components/block-in-layout.vue'
import BlockLayout from '../components/block-layout.vue'
import CardItem from '../components/card-item.vue'
import CardOnly from '../components/card-only.vue'
import DescCard from '../components/desc-card.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SolutionTitle from '../components/solution-title.vue'

const questionCardItems = ['multi_target', 'offline_work', 'bad_data'].map(
  key => ({
    title: translate('page.solutions.scene.grid_admin.questions.' + key),
    desc: translate(
      'page.solutions.scene.grid_admin.questions.' + key + '.description',
    ),
  }),
)

const descCardItems = ['admin', 'grid_user', 'charge'].map(key => ({
  title: translate('page.solutions.scene.grid_admin.solutions.flow.' + key),
  title_level_2: translate(
    `page.solutions.scene.grid_admin.solutions.flow.${key}.action`,
  ),
  desc: translate(
    `page.solutions.scene.grid_admin.solutions.flow.${key}.contents`,
  ),
}))

const cardItems = ['collect_data', 'jurisdiction', 'visit', 'summary'].map(
  key => ({
    title: translate(
      'page.solutions.scene.grid_admin.solutions.project_function.' + key,
    ),
    desc: translate(
      `page.solutions.scene.grid_admin.solutions.project_function.${key}.descriptions`,
    ),
    img: `/images/grid_admin/project_function_${key}.png`,
  }),
)
const cardOnlyItem = {
  title: translate(
    'page.solutions.scene.grid_admin.solutions.project_function.share',
  ),
  desc: translate(
    'page.solutions.scene.grid_admin.solutions.project_function.share.descriptions',
  ),
  img: '/images/grid_admin/project_function_share.png',
}

const valueCardItems = ['measure', 'work_online', 'classification'].map(
  key => ({
    title: translate('page.solutions.scene.grid_admin.project_value.' + key),
    desc: translate(
      `page.solutions.scene.grid_admin.project_value.${key}.description`,
    ),
  }),
)

const itemListItems = ['ensure', 'simiple', 'any_time', 'grow_up'].map(key => ({
  title: translate('page.solutions.scene.grid_admin.project_advantages.' + key),
  desc: translate(
    'page.solutions.scene.grid_admin.project_advantages.' +
      key +
      '.description',
  ),
  icon: '/images/grid_admin/' + key + '.svg',
}))
</script>
