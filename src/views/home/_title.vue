<template>
  <div class="text-center flex flex-col items-center">
    <h3>{{ title }}</h3>
    <p
      v-if="description"
      class="w-full md:text-base md:leading-[22px] lg:max-w-[588px] text-sm max-w-[450px] mt-2 text-gray-80"
    >
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
    default: '',
  },
})
</script>
