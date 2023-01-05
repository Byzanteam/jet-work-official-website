<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.form_engine')"
    img="/images/form_engine/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.platform.form_engine.block_title_one')"
  >
    <div class="flex flex-col">
      <div
        class="flex md:flex-row md:engine-linear-gradient--line md:data-hub-border-t flex-col flex-wrap"
      >
        <CardItem
          v-for="item of itemListItems"
          :key="item.title"
          :item="item"
          class="flex-1"
        />
      </div>
      <div class="hidden md:flex md:data-hub-border-b">
        <div
          v-for="item of itemListItems"
          :key="item.title"
          class="h-[80px] data-hub-item"
        >
          <span class="hidden">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ImgCardItem
        v-for="item of cardsItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-10 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.form_engine.block_title_three')"
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
  data_acquisition: {
    form_field: {
      icon: '/images/form_engine/form_field.svg',
      title: '表单字段',
      description:
        '单行文本、多行文本、数字、身份证、手机号码、单选、多选、日期选择、时间选择、日期和时间选择、级联选择、组织选择、成员选择、计算字段、星级评分、文件上传、地理定位、明细清单。',
    },
    form_statistics: {
      icon: '/images/form_engine/form_statistics.svg',
      title: '表单统计',
      description:
        '根据表单单选、多选、星级评分字段记录，一键生成图表统计，针对每个选项或评分显示相关填写记录占比、数量。',
    },
    form_handle: {
      icon: '/images/form_engine/form_handle.svg',
      title: '表单处置',
      description:
        '可导入、导出表单记录，对数据进行统计、搜索、添加、删除、分享等加工。',
    },
    form_logic: {
      icon: '/images/form_engine/form_logic.svg',
      title: '表单逻辑',
      description:
        '设置单选或多选字段选项逻辑，根据设定的逻辑，用户填写该单选或多选字段选项时触发逻辑显示其他相应字段内容。',
    },
  },
  multi_fields_quick_config: {
    admin: {
      title: '管理端',
      descriptions:
        '丰富字段种类，满足用户不同场景表单构建- 灵活可“拖拽式”的构建表单- 即编辑即上线的操作模式- 低代码实现表单与其他应用集成',
      image: '/images/form_engine/multi_fields_admin.webp',
    },
    client: {
      title: '用户端',
      descriptions:
        '支持电脑端、手机端、Pad 端的登录使用- 支持多平台适配，可在微信、网页、钉钉等平台中进行表单填写- 界面设计简单易懂，交互性强，极易上手- 快速生成填写链接或二维码，方便传播和填写，打开链接或扫二维码即可填写',
      image: '/images/form_engine/multi_fields_client.webp',
    },
  },
  collect_data: {
    data_share: {
      icon: '/images/form_engine/data_share.svg',
      image: '/images/form_engine/data_share.png',
      title: '数据共享',
      description: '可添加协作者共享查询导出数据，更好的支撑后续数据分析',
    },
    improve_efficiency: {
      icon: '/images/form_engine/improve_efficiency.svg',
      image: '/images/form_engine/improve_efficiency.webp',
      title: '工作提效',
      description:
        '可快速录入和批量导入数据，为一线员工提速赋能，更好的支撑后续数据分析',
    },
    simplify: {
      icon: '/images/form_engine/simplify.svg',
      image: '/images/form_engine/simplify.png',
      title: '简化管理',
      description: '数据表单线上化，通过标签归类，方便搜索查询',
    },
  },
}

const itemListItems = [
  'form_field',
  'form_statistics',
  'form_handle',
  'form_logic',
].map(value => ({
  icon: get(pageAssets, `data_acquisition.${value}.icon`),
  title: get(pageAssets, `data_acquisition.${value}.title`),
  desc: get(pageAssets, `data_acquisition.${value}.description`),
}))

const cardsItems = ['admin', 'client'].map(value => ({
  title: get(pageAssets, `multi_fields_quick_config.${value}.title`),
  desc: get(pageAssets, `multi_fields_quick_config.${value}.descriptions`),
  img: get(pageAssets, `multi_fields_quick_config.${value}.image`),
}))

const selectorItems = ['data_share', 'improve_efficiency', 'simplify'].map(
  value => ({
    title: get(pageAssets, `collect_data.${value}.title`),
    desc: get(pageAssets, `collect_data.${value}.description`),
    icon: get(pageAssets, `collect_data.${value}.icon`),
    img: get(pageAssets, `collect_data.${value}.image`),
  }),
)
</script>
