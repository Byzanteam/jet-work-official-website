<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.message_manager')"
    img="/images/message_manager/title_img.png"
  />
  <BlockLayout
    :title="$t('page.solutions.platform.message_manager.block_title_one')"
  >
    <div class="flex md:flex-row flex-col flex-wrap">
      <CardItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
        class="flex-1"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.message_manager.block_title_two')"
    class="bg-gray-08"
  >
    <ImgCardOnly :item="cardItem" class="dark:bg-gray-08 bg-white" />
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.platform.message_manager.block_title_three')"
  >
    <SelectorList :items="selectorItems" class="md:mb-[183px] mb-9" />
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import {
  BlockLayout,
  SelectorList,
  CardItem,
  ImgCardOnly,
  SolutionTitle,
} from '@/views/components'

const pageText = {
  send_message: {
    message: {
      title: '发布消息',
      description:
        '快速编辑消息标题、正文，支持内容保存草稿及预览，实现消息内容发布。',
      icon: '/images/message_manager/message.svg',
    },
    ensure: {
      title: '发布确认',
      description:
        '设置消息接收范围，推送包规则、发布名义、消息标签。实现消息定向推送。',
      icon: '/images/message_manager/ensure.svg',
    },
    setting: {
      title: '消息设置',
      description:
        '可设置消息公开规则、评论规则、追加接收规则、红包规则、追加推送规则。',
      icon: '/images/message_manager/setting.svg',
    },
  },
  message_pipe: {
    individualization: {
      title: '个性化定向推送',
      descriptions:
        '推送消息配置多样性，满足不同人需求- 推送消息设置灵活性，满足消息推送时效性- 自定义三级推送，策略配置多样性- 实时收集消息传递效率，减少消息损耗- 针对不同层级、不同权限的个人或组织，定向推送',
      image: '/images/message_manager/individualization.png',
    },
  },
  users: {
    quick: {
      title: '一触即达',
      description: '消息一触即达，保证消息快速且精准地传达',
      icon: '/images/message_manager/quick.svg',
      image: '/images/message_manager/quick.webp',
    },
    improve: {
      title: '效率提升',
      description: '提高组织消息上传下达的效率，从而提高组织运转效益',
      icon: '/images/message_manager/improve.svg',
      image: '/images/message_manager/improve.png',
    },
  },
}

const itemListItems = ['message', 'ensure', 'setting'].map(value => ({
  icon: get(pageText, `send_message.${value}.icon`),
  desc: get(pageText, `send_message.${value}.description`),
  title: get(pageText, `send_message.${value}.title`),
}))

const cardItem = {
  title: get(pageText, `message_pipe.individualization.title`),
  img: get(pageText, `message_pipe.individualization.image`),
  desc: get(pageText, `message_pipe.individualization.descriptions`),
}

const selectorItems = ['quick', 'improve'].map(value => ({
  title: get(pageText, `users.${value}.title`),
  desc: get(pageText, `users.${value}.description`),
  icon: `/images/message_manager/${value}.svg`,
  img: `/images/message_manager/${value}.webp`,
}))
</script>
