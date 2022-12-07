<template>
  <div class="xl:grow-[5] md:grow-[7] md:basis-0 feature-card">
    <div class="p-8">
      <img class="w-full" :src="useThemeImgUrl(image)" alt="feature-image" />
    </div>
  </div>
</template>

<script>
import { useThemeImgUrl } from '@/hooks'

export default {
  name: 'FeatureCard',

  props: {
    image: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {
      useThemeImgUrl,
    }
  },
}
</script>
