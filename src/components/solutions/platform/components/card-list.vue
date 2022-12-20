<template>
  <BlockLayout :title="title">
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <CardItem v-for="item of items" :key="item.title" :item="item"></CardItem>
    </div>
  </BlockLayout>
</template>
<script setup>
import BlockLayout from '../../components/block-layout.vue'
import CardItem from '../../components/card-item.vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Object, required: true },
})
</script>
