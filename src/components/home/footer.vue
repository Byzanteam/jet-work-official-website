<template>
  <footer class="bg-gray-08">
    <div class="max-w-[1200px] m-auto py-14 px-5 md:px-10 xl:px-[60px]">
      <div
        class="flex flex-col xl:flex-row items-center justify-between py-2.5"
      >
        <div class="flex items-center">
          <div class="w-[60px] h-[60px]">
            <img src="/images/logo_jet-02.png" alt="logo" />
          </div>
          <div class="text-gray-50 w-[186px] ml-4 leading-snug text-base">
            {{ $t('page.home.address') }}
          </div>
        </div>
        <div
          class="text-gray-50 whitespace-nowrap xl:mt-0 mt-12 text-xs font-medium"
        >
          {{ $t('page.home.copyright') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
  inheritAttrs: false,
}
</script>
