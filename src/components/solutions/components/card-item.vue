<template>
  <div
    class="flex-1 flex flex-col justify-between rounded-lg dark:bg-gray-10 bg-white md:pl-24 md:pt-24 pl-12 pt-12 overflow-hidden"
    :class="item.img ? '' : 'pb-12'"
  >
    <div>
      <h4 class="mb-8">
        {{ item.title }}
      </h4>
      <ul
        v-if="Array.isArray(item.desc)"
        class="list-disc list-outside md:pr-24 pr-12 text-gray-60"
      >
        <li v-for="desc of item.desc" :key="desc" class="mb-4">
          {{ desc }}
        </li>
      </ul>
      <div v-else class="md:pr-24 pr-12 text-gray-60">{{ item.desc }}</div>
    </div>
    <img v-if="item.img" :src="item.img" alt="" class="w-full mt-8" />
  </div>
</template>
<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>
