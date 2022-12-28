<template>
  <SolutionTitle
    :solution="$t('page.solutions.platform')"
    :title="$t('page.solutions.platform.data_hub')"
    img="/images/data_hub/title_img.webp"
  />
  <BlockLayout :title="$t('page.solutions.scene.questions')">
    <div class="flex flex-col gap-6">
      <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
        <CardItem
          v-for="item of questionCardItems"
          :key="item.title"
          :item="item"
          align="items-center"
          class="bg-gray-08"
        />
      </div>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.solutions')"
    :block-desc="pageAssets.solutions.description"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="pageAssets.solutions.flow.title">
      <img src="/images/data_hub/flow.png" alt="" />
    </BlockInLayout>
    <BlockInLayout :title="pageAssets.solutions.platform_build">
      <img src="/images/data_hub/platform_build.webp" />
    </BlockInLayout>
    <BlockInLayout
      :title="pageAssets.solutions.project_function.title"
      class="w-full"
    >
      <TabSwitch>
        <TabPane :label="pageAssets.solutions.project_function.tab.table">
        </TabPane>
        <TabPane :label="pageAssets.solutions.project_function.tab.interface">
        </TabPane>
      </TabSwitch>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    :block-desc="pageAssets.project_value.description"
    class="bg-gray-08"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <CardItem
        v-for="item of projectValueCardItmes"
        :key="item.title"
        :item="item"
        class="flex-1 dark:bg-gray-08 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout :title="$t('page.solutions.scene.project_advantages')">
    <div class="flex md:flex-row flex-col">
      <CardItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
        class="flex-1"
      />
    </div>
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import { TabSwitch, TabPane } from '@/components'
import {
  BlockInLayout,
  BlockLayout,
  CardItem,
  SolutionTitle,
} from '@/views/components'

const pageAssets = {
  questions: {
    professional: {
      title: '专业强，门槛高',
      description:
        '传统底层数据平台功能界面复杂难懂，操作需专业型人才，大部分功能还需二次开发，成本大，时间长。',
      icon: '/images/tips.svg',
    },
    cost: {
      title: '动开发，成本高',
      description:
        '传统数据平台多数高频功能需要二次开发，且多为重复性工作，人力成本高，沟通效率低，整体成本大。',
      icon: '/images/tips.svg',
    },
    disorderly_data: {
      title: '数据乱，难管理',
      description:
        '数据为王的时代，获取数据的形式多种多样，数据抓取、数据推送等等再加上业务庞杂，如果没有面向主题的、集成的数据集合，是难以将业务落地也难以支持管理决策。',
      icon: '/images/tips.svg',
    },
  },
  solutions: {
    description:
      'DataHub 整合了很多已有的技术， 其底层包含多方，如数据仓库 （DataHouse）、接口自动对（Interface）、事件中心、数据转换器 （DataSwitcher）、消息队列自动对接 （Kafka）、前端操作界面等等 ， 其本身并不“生产”任何数据，同时自身也不需要“消费”任何的数据，数据来源于外部，并且开放给外部应用， 其不仅可以很好的组织和管理数据，也可以更好的使业务落地支持管理决策。',
    flow: {
      title: '业务流程',
      admin: {
        title: '管理员',
        action: '网格划分',
        contents: '数据录入- 地址划分- 网格员分派',
      },
      grid_user: {
        title: '网格员',
        action: '数据采集',
        contents: '查看走访目标- 一标三实走访- 类型人口走访',
      },
      charge: {
        title: '网格负责人',
        action: '数据总览',
        contents: '查看辖区数据- 查看走访数据- 主题数据库汇总- 数据分发',
      },
    },
    platform_build: '平台构建',
    project_function: {
      title: '产品功能',
      tab: {
        table: '表管理',
        interface: '接口管理',
      },
    },
  },
  project_value: {
    description:
      'DataHub 底层为多种功能集成， 其不仅有新一代的元数据管理平台为依托，也有对外的数据输出能力等， 能够更好更灵活的使业务落地来支持管理决策，旨在提升数据空间感、有序的管理数据。 将传统专业性数据功能集成平台抽象化， 取而代之的是简单易用的 UI 界面， 傻瓜式简单易上手的交互操作，无需数据专业型人才，普通业务人员就可玩转数据， 快速建设出属于自己公司的业务系统数据平台，可用于海量数据存储，可灵活自定义关联形成业务闭环，轻松玩转数据。',
    save: {
      title: '拥有数据入存管出能力',
      description:
        '支持不同数据类型分类入库、数据分类存储、数据管理、数据对外开放等能力， 极大提升了数据空间感、便于有序的管理数据。',
    },
    flexible: {
      title: '更灵活的使用数据',
      description:
        '由于数据生态的多样性， DataHub提供了可扩展的元数据管理平台，将不同数据类型分类， 解决了数据复杂性，使得我们可以更轻松灵活的使用数据。',
    },
    based_real: {
      title: '满足客户，业务孪生',
      description:
        '利用 DataHub 其功能集成特点， 根据不同业务场景出发， 满足用户多样性需求， 更好的进行业务落地。',
    },
  },
  project_advantages: {
    no_code: {
      title: '功能显性，无需开发',
      description:
        '高频功能无需开发，一键使用，减少后端开发人员重复工作量， 也降低了用于沟通的时间成本， 从根源上减少成本支出，效率增高。',
      icon: '/images/data_hub/no_code.svg',
    },
    essay_use: {
      title: '低门槛，易上手',
      description:
        '将过去高门槛复杂难懂的数据平台，用简单易懂的交互界面取而代之， 一线业务人员也可玩转数据平台，更深层次理解业务底层逻辑。',
      icon: '/images/data_hub/essay_use.svg',
    },
    run_any_where: {
      title: '多端运行',
      description:
        '支持多端运行， 采用响应式布局无缝适应PC及移动端，支持多种场景在线， 无论是在客户现场还是在办公室 ， 均可上手操作 。 同时也展示了公司在数据管理侧的实力。',
      icon: '/images/data_hub/run_any_where.svg',
    },
    redevelop: {
      title: '灵活二开',
      description:
        '根据业务不同，可灵活新增修改数据字段， 进行二次开发，满足业务需求。 也可根据业务情况来迭代交互操作添加功能提升体验，实现系统底层功能的快速优化调整。',
      icon: '/images/data_hub/redevelop.svg',
    },
  },
}

const questionCardItems = ['professional', 'cost', 'disorderly_data'].map(
  key => ({
    icon: get(pageAssets, `questions.${key}.title`),
    title: get(pageAssets, `questions.${key}.title`),
    desc: get(pageAssets, `questions.${key}.description`),
  }),
)

const projectValueCardItmes = ['save', 'flexible', 'based_real'].map(key => ({
  title: get(pageAssets, `project_value.${key}.title`),
  desc: get(pageAssets, `project_value.${key}.description`),
}))

const itemListItems = [
  'no_code',
  'essay_use',
  'run_any_where',
  'redevelop',
].map(key => ({
  title: get(pageAssets, `project_advantages.${key}.title`),
  desc: get(pageAssets, `project_advantages.${key}.description`),
  icon: get(pageAssets, `project_advantages.${key}.icon`),
}))
</script>
