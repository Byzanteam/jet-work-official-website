<template>
  <div class="flex gap-80 justify-center">
    <div class="w-658 h-600">
      <img :src="`/images/${image}`" alt="feature-image" />
    </div>
    <div class="w-478 px-48">
      <div class="w-48 h-48 mt-185 mb-44">
        <img :src="`/images/${icon}`" alt="feature-icon" />
      </div>
      <div class="w-320">
        <div class="text-brand-bule font-medium text-lg leading-22">
          {{ overline }}
        </div>
        <h3 class="text-white font-semibold text-3xl mt-8 mb-16">
          {{ label }}
        </h3>
        <p class="text-gray-50 text-base leading-22">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
}
</script>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  overline: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
