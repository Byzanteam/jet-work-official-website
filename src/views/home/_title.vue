<template>
  <div class="text-center flex flex-col items-center">
    <h2 class="md:text-[40px] md:leading-[56px] text-[32px] leading-[45px]">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="w-full md:text-base md:leading-[22px] xl:max-w-[588px] text-sm max-w-[450px] mt-2 text-gray-80"
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
