<template>
  <div class="flex flex-col items-center bg-gray-08 rounded-lg py-12 px-12">
    <SvgIcon path="/images/tips.svg"></SvgIcon>
    <h4 class="font-semibold mt-11 mb-4 text-center">{{ item.title }}</h4>
    <div class="text-gray-60">{{ item.desc }}</div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/components/svg-icon.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
