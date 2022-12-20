<template>
  <div
    class="flex-1 flex flex-col rounded-lg dark:bg-gray-10 bg-white p-12 overflow-hidden"
  >
    <h4 v-if="item.title" class="mb-8">
      {{ item.title }}
    </h4>
    <ListableText :text="item.desc" class="text-gray-60"></ListableText>
  </div>
</template>
<script setup>
import ListableText from './listable-text.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
