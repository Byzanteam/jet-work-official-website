<template>
  <div class="w-full">
    <div class="flex flex-col items-center content-container pb-6">
      <div class="md:pb-[56px] pb-[24px]" :class="title ? 'pt-[72px]' : ''">
        <h3
          v-if="title"
          class="md:px-[204px] px-[50px] text-center"
          :class="blockDesc ? 'mb-4' : 'md:mb-[56px] mb-[24px]'"
        >
          {{ title }}
        </h3>
        <div
          v-if="blockDesc"
          class="md:px-[204px] px-[20px] text-gray-60 text-center"
        >
          {{ blockDesc }}
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, default: '' },
  blockDesc: { type: String, default: '' },
})
</script>
