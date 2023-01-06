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
    class="dark:bg-gray-08 bg-gray-03 rounded-lg md:pb-0 pb-0"
  >
    <div class="mt-14 overflow-hidden">
      <img src="/images/grassroot/rule_by_law_instance.webp" />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'GrassrootRuleByLaw',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { DataTable } from '@/components'
import { BlockInLayout, CardItem } from '@/views/components'

import { splitTableText } from './utils'

const pageText = {
  summary: {
    title: '概述',
    description:
      '为推进基层法治和德治建设，通过线上化的宣传、建立组织机制、建设志愿者服务平台以及邻里互助和互动交流平台，并对数据进行管理分析，以数据辅助决策，提高管辖内的德治法治建设。德治法治包含德治宣扬、志愿者服务、微心愿、线上法治等。',
  },
  more_scenes: {
    title: '更多场景',
    description: '法律援助、线上法制、微心愿、社区风采等。',
  },
  table: {
    title: {
      typical_scenarios: '典型场景',
      approval: '志愿者服务',
      grid_admin: '积分系统&积分商城',
    },
    content: {
      function: {
        typical_scenarios: '功能',
        approval: '从活动的报名、通知、签到、总结全息进行线上化操作及管理。',
        grid_admin:
          '用户通过参与公众中的各种积分行为所获取的积分，通过及扥商城实现积分的兑换- 积分商城系统分为商家版本和群众版本，商家版本可以实现对各种礼品的上架、下架、删除等操作；群众版本则可以实现对自己已有积分的查看和各种礼品的选择及兑换。',
      },
      advantage: {
        typical_scenarios: '优势',
        approval:
          '根据活动不同的主题，可快速定制不同的线上活动风格，快速响应线下业务的需求。',
        grid_admin:
          '后台积分规则灵活配置，简单方便，容易上手，用户端傻瓜式操作，简单易懂',
      },
      value: {
        typical_scenarios: '价值',
        approval:
          '整合了有效资源，丰富了志愿服务的形式，打破了志愿服务的时空限制，方便了志愿者服务与不同群体需求的有效对接，提升了志愿服务的实效。',
        grid_admin:
          '积分商城可以让用户体验到积分价值感- 可以提升用户活跃度、粘性，增加公众号关注度。',
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
