<template>
  <div class="bg-work-point xl:py-[120px] py-16 content-container">
    <SectionTitle
      :title="$t('page.home.how_it_work')"
      :description="$t('page.home.how_it_work.description')"
    />
    <div class="bg-gradient-aperture bg-center">
      <div class="flex justify-center mt-8">
        <ProgressBar
          :length="progressBarLength"
          :hilight-number="hilightNumber"
        />
      </div>
      <div class="flex items-center md:pt-[104px] pt-12 pb-6">
        <div class="overflow-scroll" @scroll="handleScroll">
          <img
            src="/images/how_it_work.png"
            alt="work-way"
            class="max-w-none"
          />
        </div>
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
