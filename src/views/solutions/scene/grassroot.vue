<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.grassroot')"
    img="/images/grassroot/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.scene.grassroot.questions')">
    <div class="grid gap-6 md:grid-cols-2 grid-cols-1 md:px-23">
      <QuestionCardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
      ></QuestionCardItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grassroot.solutions')"
    :block-desc="$t('page.solutions.scene.grassroot.solutions.description')"
    class="overflow-hidden"
  >
    <img class="mb-6" src="/images/grassroot/solutions.png" alt="" />
    <TabSwitch :tabs="tabs"></TabSwitch>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grassroot.project_value')"
    :block-desc="$t('page.solutions.scene.grassroot.project_value.description')"
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <CardItem
        v-for="item of cardItems"
        :key="item.title"
        :item="item"
      ></CardItem>
    </div>
  </BlockLayout>
  <BlockLayout :title="$t('page.solutions.scene.grassroot.project_advantages')">
    <div class="grid md:grid-cols-2 grid-cols-1">
      <IconItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
      ></IconItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.grassroot.success_cases')"
    class="bg-gray-08"
  >
    <SuccessCaseCard img="/images/grassroot/success_cases.png">
      <h4>
        {{ $t('page.solutions.scene.grassroot.success_cases.cases_name') }}
      </h4>
      <div v-for="item of successCaseDescItems" :key="item.title">
        <div class="font-semibold mb-2 mt-6">{{ item.title }}</div>
        <div class="text-gray-60">{{ item.desc }}</div>
      </div>
    </SuccessCaseCard>
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockLayout from '../components/block-layout.vue'
import CardItem from '../components/card-item.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SolutionTitle from '../components/solution-title.vue'
import SuccessCaseCard from '../components/success-case-card.vue'
import TabSwitch from '../components/tab-switch.vue'

import GrassrootBuilding from './components/grassroot-building.vue'
import GrassrootGovernmentGovernance from './components/grassroot-governemnt-governance.vue'
import GrassrootGovernmentOperation from './components/grassroot-government-operation.vue'
import GrassrootResidentAutonomy from './components/grassroot-resident-autonomy.vue'
import GrassrootRuleByLaw from './components/grassroot-rule-by-law.vue'

const questionCardItems = [
  'few_people',
  'low_efficiency',
  'poor_business',
  'few_data',
].map(key => ({
  title: translate('page.solutions.scene.grassroot.questions.' + key),
  desc: translate(
    `page.solutions.scene.grassroot.questions.${key}.description`,
  ),
}))

const tabs = [
  {
    label: translate('page.solutions.scene.grassroot.tab.building'),
    component: GrassrootBuilding,
  },
  {
    label: translate('page.solutions.scene.grassroot.tab.government_operation'),
    component: GrassrootGovernmentOperation,
  },
  {
    label: translate(
      'page.solutions.scene.grassroot.tab.government_governance',
    ),
    component: GrassrootGovernmentGovernance,
  },
  {
    label: translate('page.solutions.scene.grassroot.tab.resident_autonomy'),
    component: GrassrootResidentAutonomy,
  },
  {
    label: translate('page.solutions.scene.grassroot.tab.rule_by_law'),
    component: GrassrootRuleByLaw,
  },
]

const cardItems = ['enterprise', 'worker'].map(key => ({
  title: translate('page.solutions.scene.grassroot.project_value.' + key),
  desc: translate(
    `page.solutions.scene.grassroot.project_value.${key}.description`,
  ),
}))

const itemListItems = ['private', 'twin', 'parallel', 'iteration'].map(key => ({
  title: translate('page.solutions.scene.grassroot.project_advantages.' + key),
  desc: translate(
    `page.solutions.scene.grassroot.project_advantages.${key}.description`,
  ),
  icon: '/images/grassroot/' + key + '.svg',
}))

const successCaseDescItems = [
  'public_service',
  'social_governance',
  'internal',
].map(key => ({
  title: translate(
    'page.solutions.scene.grassroot.success_cases.cases_detail.' + key,
  ),
  desc: translate(
    `page.solutions.scene.grassroot.success_cases.cases_detail.${key}.description`,
  ),
}))
</script>
