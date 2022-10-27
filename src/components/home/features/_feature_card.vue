<template>
  <div class="xl:grow-[7] grow-[5] basis-0 feature-card">
    <div class="px-6 py-4">
      <img class="w-full" :src="`/images/${image}`" alt="feature-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',

  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
