<template>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.bill_config',
      )
    "
  >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of billValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.tag_config',
      )
    "
  >
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of tagValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.form_config',
      )
    "
  >
    <ValueCard :item="formValueCardItem" class="bg-gray-08 mb-6"></ValueCard>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of formValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
  <BlockInLayout
    :title="
      $t(
        'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.organize_config',
      )
    "
  >
    <ValueCard
      :item="organizeValueCardItem"
      class="bg-gray-08 mb-6"
    ></ValueCard>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <ValueCard
        v-for="item of organizeValueCardItems"
        :key="item.title"
        :item="item"
        class="bg-gray-08"
      ></ValueCard>
    </div>
  </BlockInLayout>
</template>

<script setup>
import { translate } from '@/locale'

import BlockInLayout from '../../components/block-in-layout.vue'
import ValueCard from '../../components/value-card.vue'

const billValueCardItems = [
  'theme_type',
  'theme_field',
  'authority',
  'field_allow',
].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.bill_config.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.bill_config.${key}.descriptions`,
  ),
}))

const tagValueCardItems = ['group', 'message'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.tag_config.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.tag_config.${key}.descriptions`,
  ),
}))

const formValueCardItem = {
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.form_config.new_form',
  ),
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.form_config.new_form.descriptions',
  ),
}
const formValueCardItems = ['push', 'more_config'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.form_config.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.form_config.${key}.descriptions`,
  ),
}))

const organizeValueCardItem = {
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.organize_config.overview',
  ),
  desc: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.organize_config.overview.descriptions',
  ),
}
const organizeValueCardItems = ['view', 'edit'].map(key => ({
  title: translate(
    'page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.organize_config.' +
      key,
  ),
  desc: translate(
    `page.solutions.scene.all_in_one_table.solutions.project_function.tab.config.organize_config.${key}.descriptions`,
  ),
}))
</script>
