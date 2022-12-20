<template>
  <ul class="flex gap-2 max-w-[450px] xl:max-w-sm w-full">
    <li
      v-for="item in length"
      :key="item"
      :class="item <= hilightNumber ? 'bg-brand-blue' : 'bg-gray-20'"
      class="h-1 rounded-xl flex-grow"
    />
  </ul>
</template>

<script>
export default {
  name: 'ProgressBar',
}
</script>

<script setup>
defineProps({
  length: {
    type: Number,
    required: true,
  },
  hilightNumber: {
    type: Number,
    default: 1,
  },
})
</script>
