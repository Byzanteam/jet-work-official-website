<template>
  <BlockLayout :block-desc="pageText.description" padding="px-0">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ImgCardItem
        v-for="item of cardItems"
        :key="item.title"
        :item="item"
        class="dark:bg-gray-08 bg-gray-03"
      />
      <div
        class="flex-1 flex flex-col justify-between rounded-lg md:pl-24 md:pt-24 pl-12 pt-12 dark:bg-gray-08 bg-gray-03"
      >
        <div class="flex flex-col md:pr-24 pr-12">
          <h5 class="mb-8">
            {{ pageText.proxy.title }}
          </h5>
          <div class="text-gray-80">{{ pageText.proxy.description }}</div>
          <ul
            v-for="itemValue of proxyCardItems"
            :key="itemValue.title"
            class="list-disc list-inside mt-4 text-gray-80"
          >
            <div>{{ itemValue.title }}</div>
            <li class="my-4">
              {{ itemValue.desc }}
            </li>
          </ul>
        </div>
        <img :src="pageText.proxy.image" alt="" class="w-full mt-8" />
      </div>
      <div
        class="flex-1 flex flex-col justify-between rounded-lg md:pl-24 md:pt-24 pl-12 pt-12 dark:bg-gray-08 bg-gray-03"
      >
        <div class="flex flex-col md:pr-24 pr-12">
          <h5 class="mb-8">
            {{ pageText.one_thing.title }}
          </h5>
          <div class="text-gray-80 mb-4">
            {{ pageText.one_thing.description }}
          </div>
          <div class="text-gray-80">{{ pageText.one_thing.description2 }}</div>
        </div>
        <img :src="pageText.one_thing.image" alt="" class="w-full mt-8" />
      </div>
    </div>
  </BlockLayout>
</template>

<script>
export default {
  name: 'ApprovalMobile',
}
</script>
<script setup>
import { get } from 'lodash-es'

import { BlockLayout, ImgCardItem } from '@/views/components'

const pageText = {
  description:
    '掌上办建设主要服务于群众/企业对于政务服务事项的查询、发起及审批查询，工作人员端进行受理、流程流转以及数据留存，领导可通过数据分析可视化来对整个工作进行决策判断。',
  build: {
    title: '建设思路',
    image: '/images/approval/mobile_build.webp',
    description:
      '掌上办整体思路是由群众/企业将事项在线上填报电子表单发起后，跳过综窗工作人员，直接由业务科室在线受理确认，平台自动将数据传入垂管系统和省、市一体化平台，让工作人员进行办理，并通过平台流转到审核节点进行办理，并将结果反馈给发起人。',
  },
  component: {
    title: '“一件事一次办”服务模块',
    image: '/images/approval/mobile_component.png',
    description:
      '通过建设一件事一次办服务模块对主题式、套餐式服务事项进行配置，通过梳理不同的基础事项进行组合归类，实现多个事项一次性办理，减少申请人跑动现场的次数和提交重复的材料。',
  },
  proxy: {
    title: '授权代办模块',
    image: '/images/approval/mobile_proxy.webp',
    description:
      '利用区块链技术，实现在线授权代办业务，保证数据真实性和可追溯性。',
    authorizer: {
      title: '授权人',
      description:
        '授权人根据需要办理的业务事项选择法人授权或个人授权，进行人脸识别。',
    },
    agent: {
      title: '代办人',
      description:
        '授权成功后，代办人会收到短信和微信的推送，点击其中链接即可开始办理业务。',
    },
    blockchain: {
      title: '区块链技术',
      description:
        '委托代办采用区块链技术全程监管数据，保证数据真实性、实效性和安全性。区块链技术对每个节点进行监控，保证授权代办数据的安全和真实，工作人员可以直接对其申请事项进行办理。',
    },
  },
  one_thing: {
    title: '身故一件事模块',
    image: '/images/approval/mobile_one_thing.webp',
    description:
      '为群众实现“一站式”的亲人身故后事项在线办理，将10 个县级部门办理的42项老年人“身故事”集成为“一件事”。',
    description2:
      '群众身故一件事联办平台主要服务于各部门业务人员，通过联办平台即可完成村医、村干部、卫生院、乡镇（街道）、部门等多个环节的信息上报、传递和审批工作，高效完成死亡证明/火化证明开具、补助补贴停发、丧葬费抚恤金发放、户口注销等业务协同处理。',
  },
}

const cardItems = ['build', 'component'].map(key => ({
  title: get(pageText, `${key}.title`),
  desc: get(pageText, `${key}.description`),
  img: get(pageText, `${key}.image`),
}))
const proxyCardItems = ['authorizer', 'agent', 'blockchain'].map(key => ({
  title: get(pageText, `proxy.${key}.title`),
  desc: get(pageText, `proxy.${key}.description`),
}))
</script>
