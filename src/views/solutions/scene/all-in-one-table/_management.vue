<template>
  <BlockInLayout :title="pageText.data_fusion.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of fusionValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
    <div class="mt-6">
      <CardItem
        :item="fusionValueCardItem"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
  <BlockInLayout :title="pageText.data_config.title">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <CardItem
        v-for="item of updateValueCardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockInLayout>
</template>

<script>
export default {
  name: 'AllInOneTableManagement',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockInLayout, CardItem } from '@/views/components'

const pageText = {
  data_fusion: {
    title: '数据融合',
    population: {
      title: '人口一张表',
      description: '将所有人口相关数据以证件号码为唯一标识符融合为人口一张表',
    },
    space: {
      title: '地理空间一张表',
      description:
        '将所有建筑相关数据以标准地址为唯一标识符融合为地理空间一张表',
    },
    legal: {
      title: '法人一张表',
      description:
        '将所有企业相关数据以统一信用代码为唯一标识符融合为法人一张表',
    },
  },
  data_config: {
    title: '数据管理',
    delete: {
      title: '常规删除',
      description:
        '删除单条数据：支持删除单条数据。- 删除选中数据：支持删除勾选的数据。- 删除全部数据：支持删除全部数据。',
    },
    delete_population: {
      title: '删除指定人员数据',
      description: '通过excel指定部分人员对其数据进行删除。',
    },
    data_view: {
      title: '查看数据',
      description:
        '数据分页：可设置每页显示的数据数量- 最近更新时间：可查看数据的最近更新时间',
    },
    data_sort: {
      title: '筛选',
      description:
        '包含：搜索包含筛选内容的数据- 不包含：搜索不包含筛选内容的数据- 为空：搜索筛选字段下为空的数据- 不为空：搜索筛选字段下不为空的数据',
    },
    field: {
      title: '字段显示',
      description: '可设置需要显示/隐藏的字段',
    },
    export: {
      title: '导出数据',
      description:
        '导出全量数据：支持导出所有数据- 导出当前数据：支持导出当前筛选的数据',
    },
    export_delete: {
      title: '下载列表',
      description:
        '导出文件查看：可查看导出数据生成的文件的名称、文件大小和导出状态- 下载已导出文件：可下载已导出的数据文件- 删除导出文件：可删除已导出的数据文件',
    },
    exchange: {
      title: '一张表切换',
      description: '拥有多张表查看/编辑权限的用户可切换表',
    },
  },
}

const fusionValueCardItems = ['population', 'space'].map(key => ({
  title: get(pageText, `data_fusion.${key}.title`),
  desc: get(pageText, `data_fusion.${key}.description`),
}))
const fusionValueCardItem = {
  title: get(pageText, 'data_fusion.legal.title'),
  desc: get(pageText, 'data_fusion.legal.description'),
}

const updateValueCardItems = [
  'delete',
  'delete_population',
  'data_view',
  'data_sort',
  'field',
  'export',
  'export_delete',
  'exchange',
].map(key => ({
  title: get(pageText, `data_config.${key}.title`),
  desc: get(pageText, `data_config.${key}.description`),
}))
</script>
