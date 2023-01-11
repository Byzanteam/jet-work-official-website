<template>
  <div
    class="flex flex-col gap-8 justify-between rounded-lg overflow-hidden"
    :class="direction === 'row' ? 'md:flex-row md:justify-center pr-0' : ''"
  >
    <div
      class="flex flex-col md:px-24 md:pt-24 px-12 pt-12"
      :class="direction === 'row' ? 'md:pb-24 pb-12' : ''"
    >
      <h5 class="mb-8">
        {{ item.title }}
      </h5>
      <ListableText :text="item.desc" class="text-gray-60" />
    </div>
    <img v-if="item.img" :src="item.img" alt="" class="w-full" />
  </div>
</template>
<script setup>
import ListableText from './_listable-text.vue'

defineProps({
  item: { type: Object, required: true },
  direction: { type: String, default: 'col' },
})
</script>
