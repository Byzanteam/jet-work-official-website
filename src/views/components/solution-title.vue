<template>
  <div
    class="relative flex md:flex-row flex-col items-center md:justify-center gap-6 bg-gray-08 md:h-80 md:pt-0 pt-[52px] content-container overflow-hidden"
  >
    <div
      class="md:flex-grow-[5] flex-shrink-0 flex flex-col md:items-start items-center"
    >
      <div
        class="text-brand-blue bg-white rounded-full flex items-center justify-center px-4 py-1 w-max"
      >
        {{ solution }}
      </div>
      <h2 class="flex-auto">
        {{ title }}
      </h2>
    </div>
    <div class="md:flex-grow-[8] flex-shrink-0 md:self-end self-start">
      <img class="md:h-[328px] h-[276px] w-auto max-w-none" :src="img" alt="" />
    </div>
    <img
      class="absolute md:left-0 left-[-15%] top-0"
      src="/images/solution_title_bg.webp"
      alt=""
    />
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  solution: { type: String, required: true },
  img: { type: String, required: true },
})
</script>
