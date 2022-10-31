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
    <div
      class="overflow-x-scroll py-[122px] md:mt-[104px] my-6 scrollbar scrollbar-thumb-gray-80 scrollbar-track-gray-10 scrollbar-thumb-rounded-[5px]"
      @scroll="handleScroll"
    >
      <img
        src="/images/how_it_work.png"
        alt="work-way"
        class="max-w-none h-[260px]"
      />
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
