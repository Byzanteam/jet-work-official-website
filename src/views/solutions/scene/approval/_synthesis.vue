<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <ImgCardItem
      v-for="item of cardItems"
      :key="item.title"
      :item="item"
      class="bg-gray-08"
    />
  </div>
</template>

<script setup>
import { get } from 'lodash-es'

import { ImgCardItem } from '@/views/components'

const pageText = {
  description: '',
  thinking: {
    title: '建设思路',
    description:
      '群众来了大厅后通过扫码填报电子表单并递交纸质材料，综窗工作人员通过综窗系统进行受理，并且系统将数据自动传至垂管系统和省、市一体化平台，减少工作人员的录入工作量，综窗工作人员办理完后通过综窗系统将办件流转至业务科室进行审核确认。在此期间，群众可随时查询办件流转进度以及接收办件成功或失败的通知。综窗系统也会将数据留存，以便统计和分析。',
    img: '/images/approval/synthesis_thinking.webp',
  },
  twin: {
    title: '双系统结合',
    description:
      '综窗系统和掌上办系统可以完全结合，用一套逻辑满足线上线下的业务办理，更方便工作人员操作使用和数据汇集。',
    img: '/images/approval/synthesis_twin.png',
  },
}

const cardItems = ['thinking', 'twin'].map(key => ({
  title: get(pageText, `${key}.title`),
  desc: get(pageText, `${key}.description`),
  img: get(pageText, `${key}.image`),
}))
</script>
