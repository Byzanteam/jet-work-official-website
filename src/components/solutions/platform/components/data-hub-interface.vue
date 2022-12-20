<template>
  <DataHubTableCard
    :item="item"
    :other-item="otherItem"
    class="w-full"
  ></DataHubTableCard>
</template>
<script setup>
import { translate } from '@/locale'

import DataHubTableCard from './data-hub-table-card.vue'

const item = {
  title: translate(
    'page.solutions.platform.data_hub.solutions.project_function.tab.interface.list',
  ),
  desc: '',
}
const otherItem = {
  title: translate(
    'page.solutions.platform.data_hub.solutions.project_function.tab.interface.detail',
  ),
  desc: '',
}
</script>
