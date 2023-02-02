<template>
  <BlockLayout :block-desc="pageText.description" padding="px-0">
    <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of valueCardItems"
        :key="item.title"
        :item="item"
        class="lg:last:col-span-1 md:last:col-span-2 md:px-6 dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockLayout>
</template>

<script>
export default {
  name: 'ApprovalEventSorting',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockLayout, CardItem } from '@/views/components'

const pageText = {
  description: '对当前政务中心事项及一件事一次办事项进行梳理的具体步骤如下：',
  make_plan: {
    title: '编制调研计划',
    description:
      '按照需要调研的部门制定调研计划，形成调研计划表及相关调研内容安排，保障调研可以按照计划进行实施及执行；',
  },
  time: {
    title: '确定调研时间',
    description:
      '按照调研计划和相关部门确定调研时间，在调研前提前进行沟通，保障按照调研计划可以进行正常调研；',
  },
  begin_work: {
    title: '开始调研工作',
    description:
      '按照确定的调研时间对相关人员进行调研，包括：访谈、系统操作、台账提取记录，痛点分析等；',
  },
  make_document: {
    title: '生成调研文档',
    description:
      '按照调研访谈的内容及收集到的调研资料进行分析，同步对一体化平台已有事项进行对比，形成调研汇总表。',
  },
  ensure_need: {
    title: '需求确认',
    description:
      '将生成的调研文档再次和被调研人员进行核对，保障调研文档内容正确，确保交付业主的调研报告真实有效。',
  },
}

const valueCardItems = [
  'make_plan',
  'time',
  'begin_work',
  'make_document',
  'ensure_need',
].map(key => ({
  title: get(pageText, `${key}.title`),
  desc: get(pageText, `${key}.description`),
}))
</script>
