<template>
  <div class="flex md:flex-row flex-col gap-6">
    <CardItem :item="valueCardItemOne" class="flex-grow-[3] bg-gray-08" />
    <CardItem :item="valueCardItemTwo" class="flex-grow-[1] bg-gray-08" />
  </div>
  <DataTable
    :headers="tableHeader"
    :body="tableItems"
    class="my-6 overflow-x-hidden"
  />
  <BlockInLayout :title="pageText.instance" class="bg-gray-08 rounded-lg">
    <div class="mt-14 overflow-hidden">
      <img src="/images/grassroot/government_governance_instance.webp" />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'GrassrootGovernance',
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
      '政府治理是基于党的十九大报告提出建设数字中国，以信息化培育新动能，用新动能推动新发展，以新发展创造新辉煌。政府治理主要包含政务服务、综合网格治理、民生服务等功能模块。',
  },
  more_scenes: {
    title: '更多场景',
    description: '授权代办、招聘系统、老年大学、乡村振兴、场馆预约等。',
  },
  table: {
    title: {
      typical_scenarios: '典型场景',
      approval: '不见面审批',
      grid_admin: '精细化网格管理',
    },
    content: {
      function: {
        typical_scenarios: '功能',
        approval:
          ' 群众通过手机端发起政务服务事项并可查询进度，工作人员线上审批并将办件结果线上返回发起者。数据全量留存生成可视化分析辅助领导决策，同时可将数据上迁至省级和市级平台。',
        grid_admin:
          '将全区域网格管理归集在1个平台中进行开展，依据“一机统采”“一体联动”“一屏全观”3个方向上的运用，实现“一标三实数据采集”“重点人员走访”“巡查巡检”“三级联动”“实时调动”等N个应用',
      },
      advantage: {
        typical_scenarios: '优势',
        approval:
          '多端操作，数据同源；- 低代码平台赋能，五分钟一个事项上线，并可配置字段及要素；- 多年政务服务理解，提供可辅助决策的数据分析可视化；- 全量数据留存且可查询。',
        grid_admin:
          '根据社区所有的网格员采集到的基础数据，系统将自动将数据以各种主题维度进行分类，例如ABC类人、企业、重点帮扶对象进行统计分析。',
      },
      value: {
        typical_scenarios: '价值',
        approval:
          '  实现政务信息资源共享互用，群众和企业办事“最多跑一次”甚至“零跑路”。完善政务服务跨部门、跨层级、跨区域办理平台。进一步拓展办事渠道。畅通线上线下办事渠道，不断拓展方便群众企业的办理方式，引导镇村便民服务自助终端、移动端运用，真正让“数据多跑路、群众少跑腿”，加快实现便民服务“零距离”。',
        grid_admin:
          '提高辖区市民的幸福感；- 数据留存在本地；- 将明细数据通过图形可视的形式进行展现，辅佐领导科学决策。',
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
