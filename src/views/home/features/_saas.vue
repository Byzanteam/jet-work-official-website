<template>
  <div class="flex flex-col md:flex-row-reverse gap-6 items-stretch">
    <FeatureCard image="saas_feature.svg" />
    <FeatureDescription
      :title="$t('page.home.features.saas.title')"
      :summary="$t('page.home.features.saas.summary')"
      :description="$t('page.home.features.saas.description')"
      icon="saas_icon.png"
    >
      <div
        class="absolute top-full transform xl:-translate-y-1/4 -translate-y-1/4 md:translate-y-[6px] xl:right-[194px] right-0 md:w-14 w-10"
      >
        <img src="/images/saas_arrow.svg" class="w-full" />
      </div>
    </FeatureDescription>
  </div>
</template>

<script>
export default {
  name: 'SaasFeature',
}
</script>

<script setup>
import FeatureCard from './_feature_card.vue'
import FeatureDescription from './_feature_description.vue'
</script>
