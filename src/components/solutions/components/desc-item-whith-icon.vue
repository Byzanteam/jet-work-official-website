<template>
  <div class="md:flex-1 px-7 pb-10 md:border md:border-gray-03">
    <SvgIcon :path="item.icon"></SvgIcon>
    <h4 class="mt-[26px] mb-4">
      {{ item.title }}
    </h4>
    <ul
      v-if="Array.isArray(item.desc)"
      class="list-disc list-outside text-gray-60"
    >
      <li v-for="desc of item.desc" :key="desc">
        {{ desc }}
      </li>
    </ul>
    <div v-else class="text-gray-60">
      {{ item.desc }}
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/components/svg-icon.vue'

defineProps({
  item: { type: Object, required: true },
})
</script>
