<template>
  <div class="pt-24 py-144">
    <SectionTitle
      :title="$t('page.home.features')"
      :description="$t('page.home.features.description')"
    />
    <div class="pt-104 flex flex-col gap-96">
      <FeatureCard
        v-for="(card, index) in cardsData"
        v-bind="card"
        :key="card.overline"
        :class="index % 2 ? 'flex-row-reverse' : 'flex-row'"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  inheritAttrs: false,
}
</script>

<script setup>
import SectionTitle from '../_title.vue'

import FeatureCard from './_feature.vue'

const cardsData = [
  {
    image: 'features_01.png',
    icon: 'features_icon.png',
    overline: "Company's website",
    label: '像搭积木一样简单',
    description: '你只需要填充相应文案，选择图片，即可生成；通过模版快速生成',
  },
  {
    image: 'features_01.png',
    icon: 'features_icon.png',
    overline: 'SaaS',
    label: '应用的更进一步',
    description: '收集数据、让数据流动，做一个专属于公司的数据工具',
  },
  {
    image: 'features_01.png',
    icon: 'features_icon.png',
    overline: ' Platform',
    label: '打通企业内部信息孤岛',
    description:
      '自动化整个过程并解决来自任何数据源、系统或服务的数据和逻辑集成以使其全部工作',
  },
]
</script>
