<template>
  <BlockInLayout :title="pageText.data_collect.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of collectValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      />
    </div>
  </BlockInLayout>
  <BlockInLayout :title="pageText.data_update.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of updateValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      />
    </div>
    <CardItem :item="updateValueCardItem" class="bg-gray-08 mt-6" />
  </BlockInLayout>
</template>

<script>
export default {
  name: 'AllInOneTableInput',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockInLayout, CardItem } from '@/views/components'

const pageText = {
  data_collect: {
    title: '数据录入',
    add: {
      title: '数据新增',
      description:
        '数据添加：支持电脑端的单条数据添加。- 数据上传：支持excel模板数据批量上传。- 接口录入：支持通过接口将数据录入一表通系统。',
    },
    edit: {
      title: '数据修改',
      description: '支持修改数据。',
    },
  },
  data_update: {
    title: '数据上传记录',
    data_volume: {
      title: '上传数据量',
      description: '支持查看批量上传数据的上传数据量查看。',
    },
    data_state: {
      title: '上传状态',
      description: '支持查看批量上传数据的上传状态查看。',
    },
    data_time: {
      title: '上传时间',
      description: '支持查看批量上传数据的上传时间查看。',
    },
  },
}

const collectValueCardItems = ['add', 'edit'].map(key => ({
  title: get(pageText, `data_collect.${key}.title`),
  desc: get(pageText, `data_collect.${key}.description`),
}))

const updateValueCardItems = ['data_volume', 'data_state'].map(key => ({
  title: get(pageText, `data_update.${key}.title`),
  desc: get(pageText, `data_update.${key}.description`),
}))
const updateValueCardItem = {
  title: get(pageText, 'data_update.data_time.title'),
  desc: get(pageText, 'data_update.data_time.description'),
}
</script>
