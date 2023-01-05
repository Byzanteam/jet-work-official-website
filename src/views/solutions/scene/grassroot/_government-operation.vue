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
      <img src="/images/grassroot/government_operation_instance.webp" />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'GrassrootOperation',
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
      '政府运行是实现基层政府的正常运作、使得政府内部事项和业务流转更加高效便捷的一类信息化应用，主要包含一表通、OA办公、网络理政、目标督办、会议议题管理等系统。系统完全符合实际业务逻辑，且无需学习成本，简单易用，为基层工作者提供快捷方便日常工作辅助，提升内部协同与协作的效率、工作执行力、信息传递的及时性和准确性。',
  },
  more_scenes: {
    title: '更多场景',
    description:
      '请假管理、合同提醒、加班审批、网络理政、目标督办、会议议题管理、人事管理等。',
  },
  table: {
    title: {
      typical_scenarios: '典型场景',
      approval: '一表通数据管理平台',
    },
    content: {
      function: {
        typical_scenarios: '功能',
        approval:
          ' 群众通过手机端发起政务服务事项并可查询进度，工作人员线上审批并将办件结果线上返回发起者。数据全量留存生成可视化分析辅助领导决策，同时可将数据上迁至省级和市级平台。',
      },
      advantage: {
        typical_scenarios: '优势',
        approval:
          '每个社区/科室仅需维护各自的台账，数据分布式管理和存储，数据安全性更高- 操作简单易上手，无需学习成本',
      },
      value: {
        typical_scenarios: '价值',
        approval:
          '一次采集，多方共享。根据业务需求多方复用政务数据，无需工作人员再费时费力跨部门收集数据。- 统一数据来源，所有工作人员维护各自的表，同一数据只采集一次，减负降频。- RPA机器人实现自动跨系统录入，减轻数据重复录入的工作量',
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

const tableHeader = ['typical_scenarios', 'approval'].map(key =>
  get(pageText, `table.title.${key}`),
)
const tableItems = ['function', 'advantage', 'value'].map(key => [
  splitTableText(get(pageText, `table.content.${key}.typical_scenarios`)),
  splitTableText(get(pageText, `table.content.${key}.approval`)),
])
</script>
