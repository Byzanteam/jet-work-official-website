<template>
  <div class="flex flex-col md:flex-row gap-6 items-stretch">
    <FeatureCard image="application_feature.svg" />
    <div class="grow-[5] basis-0 flex flex-col justify-center relative">
      <FeatureDescription
        :title="$t('page.home.features.application.title')"
        :summary="$t('page.home.features.application.summary')"
        :description="$t('page.home.features.application.description')"
      />
      <div
        class="absolute top-full transform -translate-y-1/4 md:left-0 right-0 md:w-20 w-[3.75rem]"
      >
        <img src="/images/application_arrow.svg" class="w-full" />
      </div>
    </div>
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
