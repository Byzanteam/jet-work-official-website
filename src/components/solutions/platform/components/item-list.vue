<template>
  <BlockLayout :title="title">
    <div class="md:flex grid md:grid-cols-2 grid-cols-1">
      <IconItem v-for="item of items" :key="item.title" :item="item"></IconItem>
    </div>
  </BlockLayout>
</template>

<script setup>
import BlockLayout from '../../components/block-layout.vue'
import IconItem from '../../components/desc-item-whith-icon.vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Object, required: true },
})
</script>
