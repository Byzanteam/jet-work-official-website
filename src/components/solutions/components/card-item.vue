<template>
  <div
    class="flex-1 flex flex-col justify-between rounded-lg dark:bg-gray-10 bg-white md:pl-24 md:pt-24 pl-12 pt-12 overflow-hidden"
    :class="item.img ? '' : 'pb-12'"
  >
    <div class="md:pr-24 pr-12">
      <h4 class="mb-8">
        {{ item.title }}
      </h4>
      <ListableText :text="item.desc" class="text-gray-60"></ListableText>
    </div>
    <img v-if="item.img" :src="item.img" alt="" class="w-full mt-8" />
  </div>
</template>
<script setup>
import ListableText from './listable-text.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
