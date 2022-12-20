<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.tracking_platform')"
    img="/images/tracking_platform/title_img.png"
    class="bg-gray-08"
  ></SolutionTitle>
  <BlockLayout :title="$t('page.solutions.scene.tracking_platform.questions')">
    <div class="grid gap-6 md:grid-cols-4 grid-cols-1 md:px-23">
      <QuestionCardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
      ></QuestionCardItem>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.tracking_platform.solutions')"
    :block-desc="
      $t('page.solutions.scene.tracking_platform.solutions.description')
    "
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <div class="text-gray-60 text-center md:px-[25%] px-[10%]">
      {{
        $t(
          'page.solutions.scene.tracking_platform.solutions.architecture_description',
        )
      }}
    </div>
    <BlockInLayout
      :title="
        $t('page.solutions.scene.tracking_platform.solutions.architecture')
      "
    >
      <img
        class="md:my-14 my-6"
        src="/images/tracking_platform/architecture.png"
        alt=""
      />
    </BlockInLayout>
    <BlockInLayout
      :title="$t('page.solutions.scene.tracking_platform.solutions.flow')"
    >
      <img
        class="md:my-14 my-6"
        src="/images/tracking_platform/flow.png"
        alt="" />
      <div class="flex md:flex-row flex-col gap-6">
        <ValueCard
          v-for="item of flowDescriptions"
          :key="item.title"
          :item="item"
          class="bg-gray-08"
        ></ValueCard></div
    ></BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.tracking_platform.project_value')"
    :block-desc="
      $t('page.solutions.scene.tracking_platform.project_value.description')
    "
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ValueCard
        v-for="item of projectValueDescriptions"
        :key="item.title"
        :item="item"
      ></ValueCard>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.tracking_platform.project_advantages')"
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
    :title="$t('page.solutions.scene.tracking_platform.success_cases')"
    class="bg-gray-08"
  >
    <BlockInLayout
      :title="
        $t('page.solutions.scene.tracking_platform.success_cases.cases_name')
      "
    >
      <h4 class="text-center mb-6 mt-8">
        {{ $t('page.solutions.scene.tracking_platform.success_cases.find') }}
      </h4>
      <div class="flex md:flex-row flex-col gap-6">
        <div
          v-for="item of successCaseFindItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <h4 class="text-center mb-6 mt-8">
        {{ $t('page.solutions.scene.tracking_platform.success_cases.use') }}
      </h4>
      <div class="flex md:flex-row flex-col gap-6">
        <div
          v-for="item of successCaseUseItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <h4 class="text-center mb-6 mt-8">
        {{
          $t('page.solutions.scene.tracking_platform.success_cases.analysis')
        }}
      </h4>
      <div class="flex flex-col gap-6">
        <div
          v-for="item of successCaseAnalysisItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </BlockInLayout>
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
import ValueCard from '../components/value-card.vue'

const questionCardItems = [
  'few_people',
  'tranditional',
  'poor_business',
  'share_hard',
  'work_quality',
  'work_efficiency',
  'work_implement',
  'only_experience',
].map(key => ({
  title: translate('page.solutions.scene.tracking_platform.questions.' + key),
  desc: translate(
    `page.solutions.scene.tracking_platform.questions.${key}.description`,
  ),
}))

const flowDescriptions = ['find', 'use', 'how_use', 'analysis'].map(key => ({
  title: translate(
    'page.solutions.scene.tracking_platform.solutions.flow.' + key,
  ),
  desc: translate(
    `page.solutions.scene.tracking_platform.solutions.flow.${key}.description`,
  ),
}))

const projectValueDescriptions = [
  'stress',
  'flow',
  'accurate',
  'scientific',
].map(key => ({
  title: translate(
    'page.solutions.scene.tracking_platform.project_value.' + key,
  ),
  desc: translate(
    `page.solutions.scene.tracking_platform.project_value.${key}.description`,
  ),
}))

const itemListItems = ['efficient', 'modernization', 'target', 'practical'].map(
  key => ({
    title: translate(
      'page.solutions.scene.tracking_platform.project_advantages.' + key,
    ),
    desc: translate(
      `page.solutions.scene.tracking_platform.project_advantages.${key}.description`,
    ),
    icon: `/images/tracking_platform/${key}.svg`,
  }),
)

const successCaseFindItems = [
  '/images/tracking_platform/find_1.png',
  '/images/tracking_platform/find_2.png',
  '/images/tracking_platform/find_3.png',
]
const successCaseUseItems = [
  '/images/tracking_platform/use_1.png',
  '/images/tracking_platform/use_2.png',
  '/images/tracking_platform/use_3.png',
]
const successCaseAnalysisItems = [
  '/images/tracking_platform/analysis_1.png',
  '/images/tracking_platform/analysis_2.png',
]
</script>
