<template>
  <div class="relative w-full dark:mask-title-bg--dark mask-title-bg">
    <div
      class="flex md:flex-row flex-col items-center md:justify-center gap-6 md:h-80 md:pt-0 pt-[52px] content-container overflow-hidden"
    >
      <div
        class="md:flex-grow-[5] flex-shrink-0 flex flex-col md:items-start items-center content-container z-10"
      >
        <div
          class="text-brand-blue bg-white rounded-full flex items-center justify-center px-4 py-1 w-max"
        >
          {{ solution }}
        </div>
        <div class="flex-auto">
          <h2 class="text-center">
            {{ title }}
          </h2>
        </div>
      </div>
      <div class="md:flex-grow-[8] flex-shrink-0 md:self-end self-start">
        <img
          class="md:h-[328px] h-[276px] w-auto max-w-none"
          :src="img"
          alt=""
        />
      </div>
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
