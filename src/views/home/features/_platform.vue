<template>
  <div class="flex flex-col md:flex-row gap-6 items-stretch">
    <FeatureCard image="platform_feature.svg" />
    <FeatureDescription
      :title="$t('page.home.features.platform.title')"
      :summary="$t('page.home.features.platform.summary')"
      :description="$t('page.home.features.platform.description')"
      icon="platform_icon.png"
    />
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
