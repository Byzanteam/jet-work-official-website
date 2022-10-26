<template>
  <div class="text-center flex flex-col items-center">
    <h2 class="text-white">{{ title }}</h2>
    <p class="w-588 mt-8 text-gray-50">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  inheritAttrs: false,
}
</script>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
