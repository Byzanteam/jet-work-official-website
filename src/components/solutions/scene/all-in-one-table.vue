<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.all_in_one_table')"
    img="/images/all_in_one_table/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.scene.all_in_one_table.questions')">
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
    :title="$t('page.solutions.scene.all_in_one_table.solutions')"
    :block-desc="
      $t('page.solutions.scene.all_in_one_table.solutions.description')
    "
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <div class="flex md:flex-row flex-col gap-6">
      <ValueCard
        v-for="item of solutionValueItems"
        :key="item.desc"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
    <BlockInLayout
      :title="
        $t('page.solutions.scene.all_in_one_table.solutions.platform_build')
      "
    >
      <img src="/images/all_in_one_table/platform_build.png" alt="" />
    </BlockInLayout>
    <BlockInLayout
      :title="
        $t('page.solutions.scene.all_in_one_table.solutions.project_function')
      "
    >
      <TabSwitch :tabs="tabs"></TabSwitch>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.all_in_one_table.project_value')"
    :block-desc="
      $t('page.solutions.scene.all_in_one_table.project_value.description')
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
    :title="$t('page.solutions.scene.all_in_one_table.project_advantages')"
  >
    <div class="flex md:flex-row flex-col">
      <IconItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
      ></IconItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.all_in_one_table.success_cases')"
    class="bg-gray-08"
  >
    <SuccessCase img="/images/all_in_one_table/success_cases.png">
      <h4 class="sm:mb-12 mb-8">
        {{
          $t('page.solutions.scene.all_in_one_table.success_cases.cases_name')
        }}
      </h4>
      <div class="text-gray-60">
        {{
          $t('page.solutions.scene.all_in_one_table.success_cases.cases_detail')
        }}
      </div>
    </SuccessCase>
  </BlockLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../components/block-in-layout.vue'
import BlockLayout from '../components/block-layout.vue'
import IconItem from '../components/desc-item-whith-icon.vue'
import QuestionCardItem from '../components/question-card-item.vue'
import SolutionTitle from '../components/solution-title.vue'
import SuccessCase from '../components/success-case-card.vue'
import TabSwitch from '../components/tab-switch.vue'
import ValueCard from '../components/value-card.vue'

import AllInOneTableConfig from './components/all-in-one-table-config.vue'
import AllInOneTableInput from './components/all-in-one-table-input.vue'
import AllInOneTableManagement from './components/all-in-one-table-management.vue'

const questionCardItems = ['multi', 'unified', 'unilateral'].map(key => ({
  title: translate('page.solutions.scene.all_in_one_table.questions.' + key),
  desc: translate(
    'page.solutions.scene.all_in_one_table.questions.' + key + '.description',
  ),
}))

const solutionValueItems = ['grab', 'fusion', 'use'].map(key => ({
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.description_detail.' + key,
  ),
}))

const tabs = [
  {
    label: translate(
      'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config',
    ),
    component: AllInOneTableConfig,
  },
  {
    label: translate(
      'page.solutions.scene.all_in_one_table.solutions.project_function.tab.input',
    ),
    component: AllInOneTableInput,
  },
  {
    label: translate(
      'page.solutions.scene.all_in_one_table.solutions.project_function.tab.management',
    ),
    component: AllInOneTableManagement,
  },
]

const projectValueCardItmes = ['once', 'multi', 'source', 'check'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.project_value.' + key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.project_value.${key}.description`,
  ),
}))

const itemListItems = ['private', 'twin', 'parallel', 'iteration'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.project_advantages.' + key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.project_advantages.${key}.description`,
  ),
  icon: '/images/all_in_one_table/' + key + '.svg',
}))
</script>
