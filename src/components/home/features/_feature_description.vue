<template>
  <div class="md:py-0 py-9 px-4 xl:px-12">
    <div class="p-1">
      <img
        class="w-12 h-12"
        src="/images/features_icon.png"
        alt="feature-icon"
      />
    </div>
    <div class="xl:mt-10 mt-4 w-full">
      <div class="text-brand-bule font-medium text-lg leading-[22px]">
        {{ props.title }}
      </div>
      <h3 class="text-white font-semibold text-2xl mt-2 mb-4">
        {{ props.summary }}
      </h3>
      <p class="text-gray-80 text-base leading-[22px]">
        {{ props.description }}
      </p>
    </div>
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
})
</script>
