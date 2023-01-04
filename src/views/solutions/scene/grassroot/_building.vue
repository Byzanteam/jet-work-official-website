<template>
  <div class="flex md:flex-row flex-col gap-6">
    <CardItem
      :item="valueCardItemOne"
      class="flex-[3] dark:bg-gray-08 bg-gray-03"
    />
    <CardItem
      :item="valueCardItemTwo"
      class="flex-[1] dark:bg-gray-08 bg-gray-03"
    />
  </div>
  <DataTable
    :headers="tableHeader"
    :body="tableItems"
    class="block w-full my-6 overflow-x-scroll"
  />
  <BlockInLayout
    :title="pageText.instance"
    class="dark:bg-gray-08 bg-gray-03 rounded-lg pb-0"
  >
    <div class="mt-14 overflow-hidden">
      <img src="/images/grassroot/building_instance.webp" />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'GrassrootBuilding',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { DataTable } from '@/components'
import { BlockInLayout, CardItem } from '@/views/components'

const pageText = {
  summary: {
    title: '概述',
    description:
      '“党建引领”是在传统党建基础上，通过互联网全息技术多维度呈现方式，从党建宣传、交流互动、党员教育、党员服务、党务管理、党员督办六大方向全面统筹党建工作，使得党建工作更全面化、网络化、可视化、现代化、立体化。',
  },
  more_scenes: {
    title: '更多场景',
    description: '发展党员、党组织关系转入转出、党员考评、微课堂等。',
  },
  table: {
    title: {
      typical_scenarios: '典型场景',
      expenses: '党组织党员党费管理',
    },
    content: {
      function: {
        typical_scenarios: '功能',
        expenses:
          '无需手工台账和人工流转，将线下党组织党员党费管理工作全量转为线上实现“业务孪生。”系统智能化计算时间，自动提醒工作人员党费缴纳等相关信息。',
      },
      advantage: {
        typical_scenarios: '优势',
        expenses:
          '将党组织台账、党员台账、党费台账关联分析，实现数据的联动管理。',
      },
      value: {
        typical_scenarios: '价值',
        expenses:
          '高效、科学、系统进行党组织党员党费信息的管理，提升基层党建管理效能。',
      },
    },
  },
  instance: '场景实例',
}

const valueCardItemOne = {
  title: get(pageText, 'summary.title'),
  desc: get(pageText, 'summary.description'),
}
const valueCardItemTwo = {
  title: get(pageText, 'more_scenes.title'),
  desc: get(pageText, 'more_scenes.description'),
}

const tableHeader = ['typical_scenarios', 'expenses'].map(key =>
  get(pageText, `table.title.${key}`),
)
const tableItems = ['function', 'advantage', 'value'].map(key => [
  get(pageText, `table.content.${key}.typical_scenarios`),
  get(pageText, `table.content.${key}.expenses`),
])
</script>
