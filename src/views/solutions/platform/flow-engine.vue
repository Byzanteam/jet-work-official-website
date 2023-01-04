<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.flow_engine')"
    img="/images/flow_engine/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.platform.flow_engine.block_title_one')"
  >
    <div class="flex md:flex-row flex-col flex-wrap">
      <CardItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
        class="flex-1"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.flow_engine.block_title_two')"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ImgCardItem
        v-for="item of cardsItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.flow_engine.block_title_three')"
  >
    <SelectorList :items="selectorItems" />
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import {
  BlockLayout,
  SelectorList,
  CardItem,
  ImgCardItem,
  SolutionTitle,
} from '@/views/components'

const pageAssets = {
  workflow: {
    field: {
      icon: '/images/flow_engine/workflow_field.svg',
      title: '流转字段',
      description:
        '支持多种字段类型构建，包括章节、单行文本、多行文本、选择、日期和时间选择、级联选择、组织选择、成员选择、计算字段、星级评分、文件上传、地理定位、明细清单。',
    },
    logic: {
      icon: '/images/flow_engine/workflow_logic.svg',
      title: '流程逻辑',
      description: '根据单选多选选项设置字段判断逻辑。',
    },
    policy_map: {
      icon: '/images/flow_engine/workflow_policy_map.svg',
      title: '流程策略图',
      description:
        '利用开始节点、结束节点、流程节点、机器节点、子流程及它们节点属性构建流程审批线路。',
    },
    data: {
      icon: '/images/flow_engine/workflow_data.svg',
      title: '流程数据',
      description:
        '表格形式展示流程数据，自定义展示字段，支持查询一键导出数据。',
    },
    setting: {
      icon: '/images/flow_engine/workflow_setting.svg',
      title: '流程设置',
      description:
        '可设置流程提交前实名核身、提交后跳转页面、流程数据模板打印、流程节点数据监听、流程字段表项映射、流程记录编号规则、流程ExtraRules等等功能，满足流程扩展各种应用场景类型。',
    },
  },
  configable: {
    admin: {
      title: '管理端',
      descriptions:
        '丰富的节点配置属性，支撑复杂或特殊流程搭建- 灵活可“拖拽式”的构建流程- 即编辑即上线的操作模式- 低代码实现流程与其他应用集成- 可根据场景需要定制机器节点替代人工审核工作',
      image: '/images/flow_engine/configable_admin.webp',
    },
    client: {
      title: '用户端',
      descriptions:
        '支持电脑端、手机端、Pad端的登录使用- 支持多平台适配，可在微信、网页、钉钉等平台中进行流程发起- 界面设计简单易懂，交互性强，极易上手',
      image: '/images/flow_engine/configable_client.webp',
    },
  },
  improve_efficiency: {
    efficiency: {
      title: '提高效率',
      description:
        '用户可随时在手机端进行申请和处理，不受时间和空间的限制，提高审批流程效率',
      icon: '/images/flow_engine/efficiency.svg',
      image: '/images/flow_engine/efficiency.webp',
    },
    management: {
      title: '方便管理',
      description:
        '帮助工作人员业务留痕，直观可以看到自己的工作任务，工作量，工作进度；方便领导对业务情况的了解，对工作人员业务进行实时管理及考核',
      icon: '/images/flow_engine/management.svg',
      image: '/images/flow_engine/management.webp',
    },
    policy: {
      title: '辅助决策',
      description:
        '流程处理过程、处理结果等信息实现数字化。 奠定了数据基础，为后续大量的分析、查询、统计管理做好了数据准备，为领导决策提供支持',
      icon: '/images/flow_engine/policy.svg',
      image: '/images/flow_engine/policy.png',
    },
  },
}

const itemListItems = ['field', 'logic', 'policy_map', 'data', 'setting'].map(
  value => ({
    icon: get(pageAssets, `workflow.${value}.icon`),
    desc: get(pageAssets, `workflow.${value}.description`),
    title: get(pageAssets, `workflow.${value}.title`),
  }),
)

const cardsItems = ['admin', 'client'].map(value => ({
  title: get(pageAssets, `configable.${value}.title`),
  img: get(pageAssets, `configable.${value}.image`),
  desc: get(pageAssets, `configable.${value}.descriptions`),
}))

const selectorItems = ['efficiency', 'management', 'policy'].map(value => ({
  title: get(pageAssets, `improve_efficiency.${value}.title`),
  desc: get(pageAssets, `improve_efficiency.${value}.description`),
  icon: get(pageAssets, `improve_efficiency.${value}.icon`),
  img: get(pageAssets, `improve_efficiency.${value}.image`),
}))
</script>
