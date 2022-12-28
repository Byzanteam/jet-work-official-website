<template>
  <div
    class="flex md:flex-row flex-col gap-6 items-center rounded-lg md:py-12 md:pl-24 py-6 px-6 overflow-hidden"
  >
    <div class="md:order-1 order-2 min-w-[40%]">
      <h5 class="mb-8">
        {{ item.title }}
      </h5>
      <ListableText :text="item.desc" class="text-gray-60" />
    </div>
    <img
      :src="item.img"
      alt=""
      class="md:order-2 order-1 w-[622px] h-[448px]"
    />
  </div>
</template>
<script setup>
import ListableText from './_listable-text.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
