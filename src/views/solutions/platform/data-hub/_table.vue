<template>
  <div>
    <BlockInLayout :title="pageText.table.title">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <DataHubTableCard
          :other-item="firsetCard.otherItem"
          :item="firsetCard.item"
        />
        <DataHubTableCard
          v-for="item of cardItems"
          :key="item.title"
          :item="item"
        />
      </div>
    </BlockInLayout>
    <BlockInLayout :title="pageText.table_data.title">
      <CardItem :item="valueCardItem" class="dark:bg-gray-08 bg-gray-03" />
    </BlockInLayout>
    <BlockInLayout :title="pageText.event.title">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <DataHubTableCard
          v-for="item of eventCardItems"
          :key="item.title"
          :item="item"
        />
      </div>
      <div class="p-12 mt-6 rounded-lg dark:bg-gray-08 bg-gray-03">
        <h5>
          {{ pageText.event.edit.title }}
        </h5>
      </div>
    </BlockInLayout>
  </div>
</template>

<script>
export default {
  name: 'DataHubTable',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockInLayout, CardItem } from '@/views/components'

import DataHubTableCard from './_table-card.vue'

const pageText = {
  table: {
    title: '表',
    add: {
      title: '添加新表',
      description: '傻瓜式操作，简单便捷，自动生成列表记录，支持搜索查询',
    },
    detail: {
      title: '表详情',
      description: '部分字段支持编辑',
    },
    config: {
      image: '/images/data_hub/table_config.webp',
      title: '识别码配置',
      description:
        '每张表都有唯一识别码，支持自动生成亦可自定义，为接口生成提供支撑',
    },
    share: {
      image: '/images/data_hub/table_share.webp',
      title: '表接口分享',
      description: '支持一键分享接口，无需代码开发',
    },
    accept: {
      image: '/images/data_hub/table_accept.webp',
      title: '数据接收',
      description: '无需字段匹配，数据接受灵活性强',
    },
    relation: {
      image: '/images/data_hub/table_relation.webp',
      title: '事件关联',
      description:
        '可将表与流程事件绑定， 预警数据接收后可自动触发事件流程，形成事件闭环。',
    },
    list: {
      image: '/images/data_hub/table_list.webp',
      title: '列表页',
      description: '支持表关键词模糊搜索',
    },
  },
  table_data: {
    title: '表数据',
    descriptions:
      '支持删除- 支持关键词搜索- 重新发起功能：若表关联了事件，事件自动发起失败后可重新发起触发流程- 自定义分组显示：可通过共同ID自定义分组（已规划，未开始）- 列表字段自定义显示：数据列表字段支持自定义显示（已规划，未开始）',
  },
  event: {
    title: '事件',
    skylark: {
      title: '添加 Skylark 流程事件',
      description: '可与表联动形成处置闭环',
      image: '/images/data_hub/event_skylark.webp',
    },
    database: {
      title: '添加数据库事件',
      description: '',
      image: '/images/data_hub/event_database.webp',
    },
    data_push: {
      title: '数据推送',
      description: '可与接口管理联动，选择需推送的接口，快速准确推送',
      image: '/images/data_hub/event_data_push.webp',
    },
    kafka: {
      title: 'kafka',
      description: '',
      image: '/images/data_hub/event_kafka.webp',
    },
    edit: {
      title: '事件详情编辑',
      description: '',
    },
  },
}

const firsetCard = {
  item: {
    title: get(pageText, 'table.add.title'),
    desc: get(pageText, 'table.add.description'),
  },
  otherItem: {
    title: get(pageText, 'table.detail.title'),
    desc: get(pageText, 'table.detail.description'),
  },
}
const cardItems = ['config', 'share', 'accept', 'relation', 'list'].map(
  key => ({
    title: get(pageText, `table.${key}.title`),
    desc: get(pageText, `table.${key}.description`),
    img: get(pageText, `table.${key}.image`),
  }),
)

const valueCardItem = {
  desc: get(pageText, 'table_data.descriptions'),
}

const eventCardItems = ['skylark', 'database', 'data_push', 'kafka'].map(
  key => ({
    title: get(pageText, `event.${key}.title`),
    desc: get(pageText, `event.${key}.description`),
    img: get(pageText, `event.${key}.image`),
  }),
)
</script>
