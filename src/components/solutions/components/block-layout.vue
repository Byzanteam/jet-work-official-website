<template>
  <div class="flex flex-col items-center content-container pb-6">
    <h3 class="mt-[72px] mb-4 text-center">
      {{ title }}
    </h3>
    <div class="text-gray-60 text-center md:mb-[56px] mb-[24px]">
      {{ blockDesc }}
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  blockDesc: { type: String, default: '' },
})
</script>
