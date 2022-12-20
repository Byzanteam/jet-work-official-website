<template>
  <div>
    <BlockInLayout
      :title="
        $t(
          'page.solutions.platform.data_hub.solutions.project_function.tab.table.table',
        )
      "
    >
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <DataHubTableCard
          :other-item="firsetCard.otherItem"
          :item="firsetCard.item"
        ></DataHubTableCard>
        <DataHubTableCard
          v-for="item of cardItems"
          :key="item.title"
          :item="item"
        ></DataHubTableCard>
      </div>
    </BlockInLayout>
    <BlockInLayout
      :title="
        $t(
          'page.solutions.platform.data_hub.solutions.project_function.tab.table.table_data',
        )
      "
    >
      <ValueCard :item="valueCardItem" class="bg-gray-08"></ValueCard>
    </BlockInLayout>
    <BlockInLayout
      :title="
        $t(
          'page.solutions.platform.data_hub.solutions.project_function.tab.table.event',
        )
      "
    >
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <DataHubTableCard
          v-for="item of eventCardItems"
          :key="item.title"
          :item="item"
        ></DataHubTableCard>
      </div>
      <div class="p-6 bg-gray-08 mt-6 rounded-lg">
        <h4>
          {{
            $t(
              'page.solutions.platform.data_hub.solutions.project_function.tab.table.event.edit',
            )
          }}
        </h4>
      </div>
    </BlockInLayout>
  </div>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../../components/block-in-layout.vue'
import ValueCard from '../../components/value-card.vue'

import DataHubTableCard from './data-hub-table-card.vue'

const firsetCard = {
  item: {
    title: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.add',
    ),
    desc: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.add.description',
    ),
  },
  otherItem: {
    title: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.detail',
    ),
    desc: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.detail.description',
    ),
  },
}
const cardItems = ['config', 'share', 'accept', 'relation', 'list'].map(
  key => ({
    title: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.' +
        key,
    ),
    desc: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.table.' +
        key +
        '.description',
    ),
    img: '/images/data_hub/table_' + key + '.png',
  }),
)

const valueCardItem = {
  desc: translate(
    'page.solutions.platform.data_hub.solutions.project_function.tab.table.table_data.descriptions',
  ),
}

const eventCardItems = ['skylark', 'database', 'data_push', 'kafka'].map(
  key => ({
    title: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.event.' +
        key,
    ),
    desc: translate(
      'page.solutions.platform.data_hub.solutions.project_function.tab.table.event.' +
        key +
        '.description',
    ),
    img: '/images/data_hub/event_' + key + '.png',
  }),
)
</script>
