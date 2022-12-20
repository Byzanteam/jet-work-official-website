<template>
  <div class="md:flex-1 px-7 pb-10 md:border md:border-gray-03">
    <SvgIcon :path="item.icon"></SvgIcon>
    <h4 class="mt-[26px] mb-4">
      {{ item.title }}
    </h4>
    <ListableText :text="item.desc" class="text-gray-60"></ListableText>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/svg-icon.vue'

import ListableText from './listable-text.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
