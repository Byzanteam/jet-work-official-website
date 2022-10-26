<template>
  <div class="py-72 flex flex-row-reverse justify-center gap-144">
    <!-- TODO: banner image or other -->
    <div class="w-457 h-459"></div>
    <div class="w-543 h-543 text-white bg-gradient-aperture bg-contain">
      <h1 class="text-brand-bule mt-89">{{ $t('page.home.build') }}</h1>
      <h1>{{ $t('page.home.as_you_width') }}</h1>
      <p class="mt-16 mb-56 text-2xl leading-34 text-gray-65">
        {{ $t('page.home.build.description') }}
      </p>
      <button
        class="w-180 h-56 border-brand-bule border-solid border rounded-lg hover:bg-brand-bule"
      >
        {{ $t('page.home.contact') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  inheritAttrs: false,
}
</script>
