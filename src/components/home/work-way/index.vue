<template>
  <div class="bg-work-point pt-6 content-container h-screen flex flex-col">
    <div class="flex-shrink-0">
      <SectionTitle
        :title="$t('page.home.work_way')"
        :description="$t('page.home.work_way.description')"
      />
    </div>
    <div class="bg-gradient-aperture flex-grow bg-center">
      <div class="flex justify-center mt-8 flex-shrink-0">
        <ProgressBar
          :length="progressBarLength"
          :hilight-number="hilightNumber"
        />
      </div>
      <div class="flex items-center h-full">
        <div class="overflow-scroll" @scroll="handleScroll">
          <img src="/images/work_way.png" alt="work-way" class="max-w-none" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkWaySection',
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
