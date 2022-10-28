<template>
  <div class="xl:grow-[5] md:grow-[7] md:basis-0 feature-card">
    <div class="p-8">
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
