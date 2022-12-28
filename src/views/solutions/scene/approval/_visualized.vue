<template>
  <BlockLayout :block-desc="desc">
    <img src="/images/approval/visualized_1.webp" alt="" class="mb-8" />
    <img src="/images/approval/visualized_2.webp" alt="" />
  </BlockLayout>
</template>
<script setup>
import { BlockLayout } from '@/views/components'

const desc =
  '可视化分为镇（街道）、村（社区）数据统计可视化和行政审批事项可视化，并生成领导驾驶舱，将领导关心的数据维度进行分析展示，通过数据进行决策制定。'
</script>
