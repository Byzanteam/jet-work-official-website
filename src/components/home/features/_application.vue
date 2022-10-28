<template>
  <div class="flex flex-col md:flex-row gap-6 items-stretch">
    <FeatureCard image="application_feature.svg" />
    <FeatureDescription
      :title="$t('page.home.features.application.title')"
      :summary="$t('page.home.features.application.summary')"
      :description="$t('page.home.features.application.description')"
      icon="application_icon.png"
    >
      <div
        class="absolute top-full transform xl:-translate-y-1/4 xl:left-[90px] -translate-y-1/4 md:translate-y-[6px] md:left-0 right-0 xl:w-20 w-[3.75rem]"
      >
        <img src="/images/application_arrow.svg" class="w-full" />
      </div>
    </FeatureDescription>
  </div>
</template>

<script>
export default {
  name: 'ApplicationFeature',
}
</script>

<script setup>
import FeatureCard from './_feature_card.vue'
import FeatureDescription from './_feature_description.vue'
</script>
