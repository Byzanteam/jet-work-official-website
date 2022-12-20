<template>
  <div class="flex flex-col gap-9 text-center rounded-lg pt-6 pb-12 px-28">
    <div class="text-brand-blue rounded-full bg-blue-200">
      {{ item.title }}
    </div>
    <h4>{{ item.title_level_2 }}</h4>
    <div v-for="desc of item.desc.split('- ')" :key="desc" class="text-gray-60">
      {{ desc }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>
