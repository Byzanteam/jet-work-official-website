<template>
  <div class="w-full">
    <div
      class="max-w-[1320px] m-auto py-10 px-20 flex md:flex-row flex-col-reverse"
    >
      <!-- slogan container -->
      <div
        class="md:basis-[560px] md:grow-[7] md:shrink text-white bg-gradient-aperture bg-contain bg-no-repeat"
      >
        <h1 class="text-brand-bule mt-[89px]">{{ $t('page.home.build') }}</h1>
        <h1>{{ $t('page.home.as_you_wish') }}</h1>
        <p class="mt-4 mb-14 text-2xl leading-[34px] text-gray-65">
          {{ $t('page.home.build.description') }}
        </p>
        <button
          class="w-[180px] h-14 border-brand-bule border-solid border rounded-lg hover:bg-brand-bule"
        >
          {{ $t('page.home.contact_us') }}
        </button>
      </div>
      <!-- image container -->
      <div class="md:basis-[400px] md:grow-[5] md:shrink-[10]">
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
