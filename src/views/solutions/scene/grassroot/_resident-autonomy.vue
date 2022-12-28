<template>
  <div class="flex md:flex-row flex-col gap-6">
    <CardItem :item="valueCardItemOne" class="flex-[3] bg-gray-08" />
    <CardItem :item="valueCardItemTwo" class="flex-[1] bg-gray-08" />
  </div>
  <DataTable
    :headers="tableHeader"
    :body="tableItems"
    class="block w-full my-6 overflow-x-scroll"
  />
  <BlockInLayout :title="pageText.instance" class="bg-gray-08 rounded-lg pb-0">
    <div class="mt-14 overflow-hidden">
      <img src="/images/grassroot/resident_autonomy_instance.webp" />
    </div>
  </BlockInLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import { DataTable } from '@/components'
import { BlockInLayout, CardItem } from '@/views/components'

import { splitTableText } from './utils'

const pageText = {
  summary: {
    title: '概述',
    description:
      '居民自治，是社区居民在社区内实行民主选举、民主决策、民主管理、民主监督，实现社区居民自我管理、自我教育、自我服务，按照社区居民“自己管理自己的事情”、“大家的事情大家办”的原则，通过民主协商的方式，共同解决社区内公共事务和公益事业方面的问题，共同创造美好幸福生活。居民自治包括群防群治、全龄友好、诉求一键通、在线投票等。',
  },
  more_scenes: {
    title: '更多场景',
    description: '诉求一键通、投票选举、书记信箱、廉政信箱、员工建议等。',
  },
  table: {
    title: {
      typical_scenarios: '典型场景',
      approval: '群防群治',
      grid_admin: '全龄友好',
    },
    content: {
      function: {
        typical_scenarios: '功能',
        approval:
          '居民发现涉黄涉赌涉赌的情况，可以通过平台在线上报，通过平台快速流转处理居民上报事件，并支持对上报事件的数据进行统计、查询，并对接至可视化平台进行情况展示。',
        grid_admin:
          '针对0-3岁、3-18岁、18-60岁、60岁以上不同的人群，提供教育、运动、娱乐等服务，打造满足辖区居民服务需求的全龄友好系统。',
      },
      advantage: {
        typical_scenarios: '优势',
        approval:
          '打通网络诉求通道，群众随时随地可以在手机端发起投诉，实现了零跑路、高效率诉求建议服务。- 平台的界面设计简单易懂，交互性强，客户极易上手。- 群众可随时查看办事进度，办事流程透明化。',
        grid_admin:
          '将传统模式下工作人员通过线下张贴告示、派发传单、微信/QQ群转发资讯信息的方式进行线上化，使宣传更为便捷有效，宣传范围更广。- 支持电脑端、手机端、Pad端随时随地进行查看，同时支持Windows、IOS、安卓等操作系统。',
      },
      value: {
        typical_scenarios: '价值',
        approval:
          '有利于调动人民群众参与的积极性，充分发挥群防群治力量协助公安机关维护社会安定的作用。- 通过互联网的手段将基层治理的能力全面线上化，全民参与基层治理工作，让群众更有参与感，共建共治然后共享，人人都有社会责任感和获得感。',
        grid_admin:
          '给社区居民带来更优质、优惠、便捷的生活服务。- 更好地将社区、老百姓、企业、服务商联系起来，共同促进社区经济发展，共建全龄友好社区。',
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

const tableHeader = ['typical_scenarios', 'approval', 'grid_admin'].map(key =>
  get(pageText, `table.title.${key}`),
)
const tableItems = ['function', 'advantage', 'value'].map(key => [
  splitTableText(get(pageText, `table.content.${key}.typical_scenarios`)),
  splitTableText(get(pageText, `table.content.${key}.approval`)),
  splitTableText(get(pageText, `table.content.${key}.grid_admin`)),
])
</script>
