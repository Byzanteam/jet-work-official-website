<template>
  <div class="md:grow-[7] md:basis-0 flex flex-col justify-center relative">
    <div class="md:py-0 py-9 px-4 xl:px-16">
      <div class="p-1">
        <img
          class="w-12 h-12"
          :src="`/images/${props.icon}`"
          alt="feature-icon"
        />
      </div>
      <div class="xl:mt-10 mt-4 w-full">
        <div
          class="text-brand-blue font-medium md:text-lg md:leading-[21px] text-base leading-[19px]"
        >
          {{ props.title }}
        </div>
        <h3
          class="text-white font-semibold md:text-[32px] md:leading-[45px] mt-2 mb-4 text-2xl leading-[34px]"
        >
          {{ props.summary }}
        </h3>
        <p class="text-gray-80 md:text-base md:leading-[22px] text-sm">
          {{ props.description }}
        </p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FeatureDescription',
}
</script>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
