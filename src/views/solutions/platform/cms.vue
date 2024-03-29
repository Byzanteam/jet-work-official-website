<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.cms')"
    img="/images/cms/title_img.png"
  />
  <BlockLayout
    :title="$t('page.solutions.platform.cms.block_title_one')"
    padding="lg:pt-[105px] pt-16 pb-[72px]"
  >
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:decorative-border"
    >
      <CardItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
        class="md:decorative-border-item--md lg:decorative-border-item--lg"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.cms.block_title_two')"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <ImgCardItem
        v-for="item of cardsItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-10 bg-white last:hidden last:lg:flex"
      />
    </div>
    <ImgCardItem
      :item="cardsItems.at(-1)"
      class="mt-6 lg:hidden dark:bg-gray-10 bg-white"
      direction="row"
    />
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.cms.block_title_three')"
    padding="pt-[104px] md:pb-[183px] pb-36"
  >
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
      image: '/images/cms/layout_template.webp',
    },
    configable: {
      title: '灵活配置',
      descriptions:
        '页面分类、文章内容可支持关联范围，根据权限不同展示不同内容。',
      image: '/images/cms/layout_configable.webp',
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
      image: '/images/cms/magnetism.png',
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
