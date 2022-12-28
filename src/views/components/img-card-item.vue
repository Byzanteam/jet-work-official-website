<template>
  <div
    class="flex-1 flex flex-col justify-between rounded-lg md:pl-24 md:pt-24 pl-12 pt-12"
    :class="item.img ? '' : 'pb-12'"
  >
    <div class="flex flex-col md:pr-24 pr-12" :class="aligne">
      <h5 class="mb-8">
        {{ item.title }}
      </h5>
      <ListableText :text="item.desc" class="text-gray-60" />
    </div>
    <img v-if="item.img" :src="item.img" alt="" class="w-full mt-8" />
  </div>
</template>
<script setup>
import ListableText from './_listable-text.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
