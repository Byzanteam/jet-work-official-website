<template>
  <div class="w-full">
    <div
      class="max-w-[1200px] m-auto py-10 px-20 flex lg:flex-row flex-col-reverse"
    >
      <!-- slogan container -->
      <div
        class="lg:basis-[560px] lg:grow-[7] lg:shrink text-white bg-gradient-aperture bg-contain bg-no-repeat"
      >
        <h1 class="text-brand-bule mt-[89px]">{{ $t('page.home.build') }}</h1>
        <h1>{{ $t('page.home.as_you_width') }}</h1>
        <p class="mt-4 mb-14 text-2xl leading-[34px] text-gray-65">
          {{ $t('page.home.build.description') }}
        </p>
        <button
          class="w-[180px] h-14 border-brand-bule border-solid border rounded-lg hover:bg-brand-bule"
        >
          {{ $t('page.home.contact') }}
        </button>
      </div>
      <!-- image container -->
      <div class="lg:basis-[400px] lg:grow-[5] lg:shrink-[10]">
        <img src="/images/slogan_image.png" alt="slogan image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SloganSection',
  inheritAttrs: false,
}
</script>
