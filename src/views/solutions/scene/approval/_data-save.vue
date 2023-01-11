<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <ImgCardItem
      v-for="item of cardItems"
      :key="item.title"
      :item="item"
      class="dark:bg-gray-08 bg-gray-03"
    />
  </div>
  <ImgCardItem
    :item="cardOnlyItem"
    direction="row"
    class="mt-6 dark:bg-gray-08 bg-gray-03"
  />
</template>

<script>
export default {
  name: 'ApprovalDataSave',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { ImgCardItem } from '@/views/components'

const pageText = {
  description: '',
  concat: {
    title: '数据对接',
    description:
      '目前数据对接主要针对“蓉易办”平台，通过系统接口的打通，直接将办事数据上传给蓉易办，无需二次录入。',
    image: '/images/approval/data_save_concat.png',
  },
  pra: {
    title: 'RPA机器人录入',
    description:
      '对于未能实现系统接口打通的平台，会通过RPA技术手段，将数据自动填充至垂管系统或省一体化平台，即将人为的录入方式变成机器人后台自动录入，减少工作人员的工作量。',
    image: '/images/approval/data_save_pra.png',
  },
  advance_concat: {
    title: '前置库对接',
    description:
      '三级政务服务平台会将所有数据存储在一个前置库中，设置好字段和编码，由省一体化平台来抓取数据，完成数据对接。',
    image: '/images/approval/data_save_advance_concat.webp',
  },
}

const cardItems = ['concat', 'pra'].map(key => ({
  title: get(pageText, `${key}.title`),
  desc: get(pageText, `${key}.description`),
  img: get(pageText, `${key}.image`),
}))
const cardOnlyItem = {
  title: get(pageText, 'advance_concat.title'),
  desc: get(pageText, 'advance_concat.description'),
  img: get(pageText, 'advance_concat.image'),
}
</script>
