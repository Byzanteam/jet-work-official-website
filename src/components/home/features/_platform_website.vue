<template>
  <div class="flex flex-col md:flex-row gap-6 items-stretch">
    <div class="xl:grow-[7] grow-[5] basis-0">
      <img
        class="w-full"
        src="/images/platform_website_feature.png"
        alt="feature-image"
      />
    </div>
    <div class="grow-[5] basis-0 flex flex-col justify-center relative">
      <FeatureDescription
        :title="$t('page.home.features.platform_website.title')"
        :summary="$t('page.home.features.platform_website.summary')"
        :description="$t('page.home.features.platform_website.description')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformWebsiteFeature',
}
</script>

<script setup>
import FeatureDescription from './_feature_description.vue'
</script>
