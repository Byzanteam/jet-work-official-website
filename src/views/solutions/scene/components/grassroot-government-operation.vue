<template>
  <div class="flex md:flex-row flex-col gap-6">
    <ValueCard
      :item="valueCardItemOne"
      class="flex-grow-[3] bg-gray-08"
    ></ValueCard>
    <ValueCard
      :item="valueCardItemTwo"
      class="flex-grow-[1] bg-gray-08"
    ></ValueCard>
  </div>
  <DataTable :headers="tableHeader" :body="tableItems"></DataTable>
  <div class="bg-gray-08 w-full rounded-lg">
    <h3 class="text-center mt-6">
      {{
        $t('page.solutions.scene.grassroot.tab.government_governance.instance')
      }}
    </h3>
    <div class="flex justify-center items-center mt-14 overflow-hidden">
      <img src="/images/grassroot/government_operation_instance.png" />
    </div>
  </div>
</template>

<script setup>
import { translate } from '@/locale'

import DataTable from '../../components/data-table.vue'
import ValueCard from '../../components/value-card.vue'

const valueCardItemOne = {
  title: translate(
    'page.solutions.scene.grassroot.tab.government_governance.summary',
  ),
  desc: translate(
    'page.solutions.scene.grassroot.tab.government_governance.summary.description',
  ),
}
const valueCardItemTwo = {
  title: translate(
    'page.solutions.scene.grassroot.tab.government_governance.more_scenes',
  ),
  desc: translate(
    'page.solutions.scene.grassroot.tab.government_governance.more_scenes.description',
  ),
}

const tableHeader = ['typical_scenarios', 'approval'].map(key =>
  translate(
    'page.solutions.scene.grassroot.tab.government_governance.table.title.' +
      key,
  ),
)
const tableItems = ['function', 'advantage', 'value'].map(key => [
  translate(
    `page.solutions.scene.grassroot.tab.government_governance.table.content.${key}.typical_scenarios`,
  ),
  translate(
    `page.solutions.scene.grassroot.tab.government_governance.table.content.${key}.approval`,
  ),
])
</script>
