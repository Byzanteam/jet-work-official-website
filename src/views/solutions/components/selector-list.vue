<template>
  <div class="flex items-center gap-6">
    <div>
      <div
        v-for="(item, index) of items"
        :key="item.title"
        class="flex items-start p-6 gap-3 rounded-lg md:w-[384px] sm:w-[332px] w-full overflow-hidden"
        :class="
          chosedIndex === index
            ? 'md:linear-chosed-item-bg md:text-brand-blue'
            : ''
        "
        @click="() => choseBlock(index)"
      >
        <SvgIcon :path="item.icon"></SvgIcon>
        <div>
          <h4>
            {{ item.title }}
          </h4>
          <div class="text-gray-60">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <img :src="items[chosedIndex].img" alt="" class="sm:block hidden" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SvgIcon from '@/components/svg-icon.vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Object, required: true },
})

const chosedIndex = ref(0)
function choseBlock(index) {
  chosedIndex.value = index
}
</script>
