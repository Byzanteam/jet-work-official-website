<template>
  <div class="flex flex-col px-7 py-10 rounded-lg" :class="align">
    <SvgIcon v-if="item.icon" :path="item.icon" />
    <h5
      :class="item.icon ? `mt-[26px] mb-4 ${textCenter}` : `mb-8 ${textCenter}`"
    >
      {{ item.title }}
    </h5>
    <ListableText :text="item.desc" class="text-gray-60" :class="textCenter" />
  </div>
</template>
<script setup>
import { computed } from 'vue'

import { SvgIcon } from '@/components'

import ListableText from './_listable-text.vue'

const props = defineProps({
  item: { type: Object, required: true },
  align: { type: String, default: 'items-start' },
})

const textCenter = computed(() =>
  props.align === 'items-center' ? 'text-center' : '',
)
</script>
