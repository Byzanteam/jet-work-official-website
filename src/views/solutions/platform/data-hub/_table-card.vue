<template>
  <div class="rounded-lg bg-gray-08 p-12">
    <h5 class="mb-8">{{ item.title }}</h5>
    <div>{{ item.desc }}</div>
    <template v-if="otherItem">
      <h5 class="mb-8 mt-14">{{ item.title }}</h5>
      <div>{{ item.desc }}</div>
    </template>
    <img v-if="item.img" :src="item.img" alt="" class="pt-8 mx-auto" />
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  otherItem: { type: Object, default: undefined },
})
</script>
