<template>
  <div class="flex md:flex-row flex-col rounded-lg overflow-hidden">
    <div class="bg-blue-500">
      <img class="flex-1" :src="img" alt="" />
    </div>
    <div class="flex-1 py-9 px-6 dark:bg-black bg-white">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({ img: { type: String, required: true } })
</script>
