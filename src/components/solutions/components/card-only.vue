<template>
  <div
    class="flex md:flex-row flex-col items-center rounded-lg dark:bg-gray-10 bg-white md:py-12 md:pl-24 py-6 pl-6 overflow-hidden"
  >
    <div class="md:order-1 order-2 min-w-[40%]">
      <h4 class="mb-8">
        {{ item.title }}
      </h4>
      <ul class="list-disc list-inside text-gray-60">
        <li v-for="desc of item.desc" :key="desc" class="mb-4">
          {{ desc }}
        </li>
      </ul>
    </div>
    <img
      :src="item.img"
      alt=""
      class="md:order-2 order-1 w-[622px] h-[448px]"
    />
  </div>
</template>
<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>
