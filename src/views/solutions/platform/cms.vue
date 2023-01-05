<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.cms')"
    img="/images/cms/title_img.png"
  />
  <BlockLayout :title="$t('page.solutions.platform.cms.block_title_one')">
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
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.cms.block_title_two')"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <ImgCardItem
        v-for="item of cardsItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-10 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout :title="$t('page.solutions.platform.cms.block_title_three')">
    <SelectorList :items="selectorItems" />
  </BlockLayout>
</template>

<script>
export default {
  name: 'PlatformCms',
}
</script>
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
  article: {
    template: {
      title: '模板管理',
      description:
        '默认模板：支持 html、CSS、JavaScript格 式的页面定制默认模板，引用于手机端和 PC 端的前端首页、分类、文章、无权限、搜索页面- 自定义模板：支持 html、CSS、JavaScript 格式的页面定制化模板，引用于手机端和 PC 端的前端自定义分类或文章- 管理片段：把每个样式拆分为单独片段代码，在自定义模板里快捷引用，快速实现页面构建',
      icon: '/images/cms/template.svg',
    },
    classify: {
      title: '管理分类',
      description:
        '自定义分类名称、摘要、排序方式，引用分类模板实现页面样式展现，设置分类关联范围，实现权限精准划分。',
      icon: '/images/cms/classify.svg',
    },
    article: {
      title: '管理文章',
      description:
        '自定义文章标题、封面、摘要，正文内容支持富文本编辑器可支持插入外链、附件、表格等多种形式内容进行排版，引用文章模板实现页面样式展现。设置分类关联范围，实现权限精准划分。',
      icon: '/images/cms/article.svg',
    },
  },
  layout: {
    template: {
      title: '模板自定义',
      descriptions: '满足不同客户不同审美需求。',
      image: '/images/cms/layout_template.png',
    },
    configable: {
      title: '灵活配置',
      descriptions:
        '页面分类、文章内容可支持关联范围，根据权限不同展示不同内容。',
      image: '/images/cms/layout_configable.png',
    },
    quick: {
      title: '快速搭建',
      descriptions: '可提供几十种基础模板用于客户选择，一键复制模板快速上线。',
      image: '/images/cms/layout_quick.png',
    },
  },
  experience: {
    satisfied: {
      icon: '/images/cms/satisfied.svg',
      image: '/images/cms/satisfied.webp',
      title: '提高效提高满意度率',
      description:
        '根据用户群体定制页面样式包括字体大小、色彩、交互习惯等，提高用户体验满意度',
    },
    magnetism: {
      icon: '/images/cms/magnetism.svg',
      image: '/images/cms/magnetism.webp',
      title: '增加用户粘性',
      description: '打造客户个性主题元素，让用户更容易记住企业和品牌文化',
    },
  },
}

const itemListItems = ['template', 'classify', 'article'].map(value => ({
  icon: get(pageAssets, `article.${value}.icon`),
  title: get(pageAssets, `article.${value}.title`),
  desc: get(pageAssets, `article.${value}.description`),
}))

const cardsItems = ['template', 'configable', 'quick'].map(value => ({
  title: get(pageAssets, `layout.${value}.title`),
  img: get(pageAssets, `layout.${value}.image`),
  desc: get(pageAssets, `layout.${value}.descriptions`),
}))

const selectorItems = ['satisfied', 'magnetism'].map(value => ({
  title: get(pageAssets, `experience.${value}.title`),
  desc: get(pageAssets, `experience.${value}.description`),
  icon: get(pageAssets, `experience.${value}.icon`),
  img: get(pageAssets, `experience.${value}.image`),
}))
</script>
