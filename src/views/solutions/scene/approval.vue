<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.approval')"
    img="/images/approval/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.scene.approval.questions')">
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
    :title="$t('page.solutions.scene.approval.solutions')"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="$t('page.solutions.scene.approval.solutions.flow')">
      <img src="/images/approval/flow.png" alt="" />
    </BlockInLayout>
    <TabSwitch :tabs="tabs"></TabSwitch>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.approval.project_value')"
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
  <BlockLayout :title="$t('page.solutions.scene.approval.project_function')">
    <SelectorList :items="selectorListItems"></SelectorList>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.approval.advantage')"
    :block-desc="$t('page.solutions.scene.approval.advantage.description')"
  >
    <img src="/images/approval/advantage_1.png" alt="" />
    <img src="/images/approval/advantage_2.png" alt="" />
  </BlockLayout>
  <BlockLayout :title="$t('page.solutions.scene.approval.project_advantages')">
    <div class="flex md:flex-row flex-col">
      <IconItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
      ></IconItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.approval.success_cases')"
    :block-desc="$t('page.solutions.scene.approval.success_cases.description')"
    class="dark:linear-block-item-bg--dark linear-block-item-bg px-32"
  >
    <img src="/images/approval/success_cases.png" alt="" />
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../components/block-in-layout.vue'
import BlockLayout from '../components/block-layout.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SelectorList from '../components/selector-list.vue'
import SolutionTitle from '../components/solution-title.vue'
import TabSwitch from '../components/tab-switch.vue'
import ValueCard from '../components/value-card.vue'

import ApprovalBuilding from './components/approval-building.vue'
import ApprovalDataSave from './components/approval-data-save.vue'
import ApprovalEventSorting from './components/approval-event-sorting.vue'
import ApprovalMobile from './components/approval-mobile.vue'
import ApprovalSynthesis from './components/approval-synthesis.vue'
import ApprovalVisualized from './components/approval-visualized.vue'

const questionCardItems = ['live', 'hard_use', 'disunity'].map(key => ({
  title: translate('page.solutions.scene.approval.questions.' + key),
  desc: translate(`page.solutions.scene.approval.questions.${key}.description`),
}))

const tabs = [
  {
    label: translate(
      'page.solutions.scene.approval.solutions.flow.tab.event_sorting',
    ),
    component: ApprovalEventSorting,
  },
  {
    label: translate(
      'page.solutions.scene.approval.solutions.flow.tab.building',
    ),
    component: ApprovalBuilding,
  },
  {
    label: translate('page.solutions.scene.approval.solutions.flow.tab.mobile'),
    component: ApprovalMobile,
  },
  {
    label: translate(
      'page.solutions.scene.approval.solutions.flow.tab.synthesis',
    ),
    component: ApprovalSynthesis,
  },
  {
    label: translate(
      'page.solutions.scene.approval.solutions.flow.tab.data_save',
    ),
    component: ApprovalDataSave,
  },
  {
    label: translate(
      'page.solutions.scene.approval.solutions.flow.tab.visualized',
    ),
    component: ApprovalVisualized,
  },
]

const projectValueCardItmes = ['enterprise', 'worker', 'admin'].map(key => ({
  title: translate('page.solutions.scene.approval.project_value.' + key),
  desc: translate(
    `page.solutions.scene.approval.project_value.${key}.description`,
  ),
}))

const selectorListItems = ['authority', 'page', 'flow'].map(key => ({
  title: translate('page.solutions.scene.approval.project_function.' + key),
  desc: translate(
    `page.solutions.scene.approval.project_function.${key}.description`,
  ),
  img: '/images/approval/function_' + key + '.png',
}))

const itemListItems = ['population', 'worker', 'data'].map(key => ({
  title: translate('page.solutions.scene.approval.project_advantages.' + key),
  desc: translate(
    `page.solutions.scene.approval.project_advantages.${key}.description`,
  ),
  icon: '/images/approval/' + key + '.svg',
}))
</script>
