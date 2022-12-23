<template>
  <div class="bg-work-point xl:py-[120px] py-16 content-container">
    <SectionTitle
      :title="$t('page.home.how_it_work')"
      :description="$t('page.home.how_it_work.description')"
    />
    <div class="flex justify-center mt-8">
      <ProgressBar
        :length="progressBarLength"
        :hilight-number="hilightNumber"
      />
    </div>
    <div class="relative md:mt-[104px] my-6">
      <div
        class="absolute mask-linear-gradient-reverse dark:mask-linear-gradient-reverse--dark w-[15%] h-[308px] left-0 top-[98px]"
      />
      <div
        class="absolute mask-linear-gradient dark:mask-linear-gradient--dark w-[15%] h-[308px] right-0 top-[98px]"
      />
      <div
        class="absolute radial-gradient w-[543px] h-[543px] transform -translate-x-10 -translate-y-9 z-[-1]"
      />
      <div
        class="overflow-x-scroll pl-[25%] md:pl-[40%] py-[122px] scrollbar scrollbar-thumb-gray-50 dark:scrollbar-thumb-gray-80 scrollbar-track-gray-10 scrollbar-thumb-rounded-[3px]"
        @scroll="handleScroll"
      >
        <img
          src="/images/how_it_work.png"
          alt="work-way"
          class="max-w-none h-[260px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorkSection',
}
</script>

<script setup>
import { ref } from 'vue'

import SectionTitle from '../_title.vue'

import ProgressBar from './progress-bar.vue'

const progressBarLength = 5
const hilightNumber = ref(1)

function handleScroll(e) {
  const { clientWidth, scrollWidth, scrollLeft } = e.target
  const scrollUnit = (scrollWidth - clientWidth) / progressBarLength
  hilightNumber.value = Math.max(Math.ceil(scrollLeft / scrollUnit), 1)
}
</script>
