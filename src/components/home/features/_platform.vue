<template>
  <div class="flex flex-col md:flex-row gap-6 items-stretch">
    <FeatureCard image="platform_feature.svg" />
    <div class="grow-[5] basis-0 flex flex-col justify-center relative">
      <FeatureDescription
        :title="$t('page.home.features.platform.title')"
        :summary="$t('page.home.features.platform.summary')"
        :description="$t('page.home.features.platform.description')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformFeature',
}
</script>

<script setup>
import FeatureCard from './_feature_card.vue'
import FeatureDescription from './_feature_description.vue'
</script>
