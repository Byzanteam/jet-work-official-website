<template>
  <div
    class="flex md:flex-row flex-col items-center rounded-lg dark:bg-gray-10 bg-white md:py-12 md:pl-24 py-6 pl-6 overflow-hidden"
  >
    <div class="md:order-1 order-2 min-w-[40%]">
      <h4 class="mb-8">
        {{ item.title }}
      </h4>
      <ListableText :text="item.desc" class="text-gray-60"></ListableText>
    </div>
    <img
      :src="item.img"
      alt=""
      class="md:order-2 order-1 w-[622px] h-[448px]"
    />
  </div>
</template>
<script setup>
import ListableText from './listable-text.vue'
defineProps({
  item: { type: Object, required: true },
})
</script>
