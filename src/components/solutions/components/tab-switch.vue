<template>
  <div
    class="flex justify-between w-full md:px-[25%] px-0 border-b border-b-gray-60 mb-12"
  >
    <div
      v-for="(tab, index) of tabs"
      :key="tab.label"
      class="py-3"
      :class="
        index === chosedIndex
          ? 'text-brand-blue border-b-2 border-b-brand-blue'
          : ''
      "
      @click="chosedIndex = index"
    >
      {{ tab.label }}
    </div>
  </div>
  <component :is="CurrentComponent"></component>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  tabs: { type: Object, required: true },
})

const chosedIndex = ref(0)
const CurrentComponent = computed(() => props.tabs[chosedIndex.value].component)
</script>
