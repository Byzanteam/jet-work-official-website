<template>
  <div class="w-full">
    <div class="flex flex-col items-center content-container" :class="padding">
      <div class="flex flex-col items-center">
        <h3
          v-if="title"
          class="md:px-[204px] text-center"
          :class="blockDesc ? 'mb-4' : 'mb-14'"
        >
          {{ title }}
        </h3>
        <div
          v-if="blockDesc"
          class="lg:mx-[25%] md:mx-[15%] mb-14 text-gray-60 text-center"
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
  padding: { type: String, default: '' },
})
</script>
