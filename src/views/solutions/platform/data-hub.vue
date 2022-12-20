<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.data_hub')"
    img="/images/data_hub/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.platform.data_hub.questions')">
    <div class="flex flex-col gap-6">
      <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
        <QuestionCardItem
          v-for="item of questionCardItems"
          :key="item.title"
          :item="item"
        ></QuestionCardItem>
      </div>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.data_hub.solutions')"
    :block-desc="$t('page.solutions.platform.data_hub.solutions.description')"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout
      :title="$t('page.solutions.platform.data_hub.solutions.flow')"
    >
      <div class="flex md:flex-row flex-col">
        <DescCard
          v-for="item of flowDescriptions"
          :key="item.title"
          :item="item"
        ></DescCard>
      </div>
    </BlockInLayout>
    <BlockInLayout
      :title="$t('page.solutions.platform.data_hub.solutions.platform_build')"
    >
      <img src="/images/data_hub/platform_build.png" />
    </BlockInLayout>
    <BlockInLayout
      :title="$t('page.solutions.platform.data_hub.solutions.project_function')"
      class="w-full"
    >
      <TabSwitch :tabs="tabs"></TabSwitch>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.data_hub.project_value')"
    :block-desc="
      $t('page.solutions.platform.data_hub.project_value.description')
    "
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ValueCard
        v-for="item of projectValueCardItmes"
        :key="item.title"
        :item="item"
      ></ValueCard>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.data_hub.project_advantages')"
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

import BlockInLayout from '../components/block-in-layout.vue'
import BlockLayout from '../components/block-layout.vue'
import DescCard from '../components/desc-card.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SolutionTitle from '../components/solution-title.vue'
import TabSwitch from '../components/tab-switch.vue'
import ValueCard from '../components/value-card.vue'

import DataHubInterface from './components/data-hub-interface.vue'
import DataHubTable from './components/data-hub-table.vue'

const questionCardItems = ['professional', 'cost', 'disorderly_data'].map(
  key => ({
    title: translate('page.solutions.platform.data_hub.questions.' + key),
    desc: translate(
      'page.solutions.platform.data_hub.questions.' + key + '.description',
    ),
  }),
)

const flowDescriptions = ['admin', 'grid_user', 'charge'].map(key => ({
  title: translate('page.solutions.platform.data_hub.solutions.flow.' + key),
  title_level_2: translate(
    'page.solutions.platform.data_hub.solutions.flow.' + key + '.action',
  ),
  desc: translate(
    'page.solutions.platform.data_hub.solutions.flow.' + key + '.contents',
  ),
}))

const tabs = [
  {
    label: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table',
    ),
    component: DataHubTable,
  },
  {
    label: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.interface',
    ),
    component: DataHubInterface,
  },
]

const projectValueCardItmes = ['save', 'flexible', 'based_real'].map(key => ({
  title: translate('page.solutions.platform.data_hub.project_value.' + key),
  desc: translate(
    'page.solutions.platform.data_hub.project_value.' + key + '.description',
  ),
}))

const itemListItems = [
  'no_code',
  'essay_use',
  'run_any_where',
  'redevelop',
].map(key => ({
  title: translate(
    'page.solutions.platform.data_hub.project_advantages.' + key,
  ),
  desc: translate(
    'page.solutions.platform.data_hub.project_advantages.' +
      key +
      '.description',
  ),
  icon: '/images/data_hub/' + key + '.svg',
}))
</script>
