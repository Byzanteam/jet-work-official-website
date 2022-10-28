<template>
  <footer class="bg-gray-08">
    <div
      class="max-w-[1320px] m-auto py-10 xl:py-14 px-5 md:px-10 xl:px-[60px]"
    >
      <div
        class="flex flex-col xl:flex-row items-center justify-between py-2.5"
      >
        <div class="w-[110px]">
          <img
            src="/images/logo_jet.png"
            alt="logo"
            class="w-full object-cover"
          />
        </div>
        <div
          class="text-gray-80 text-sm font-medium mt-[34px] xl:mt-0 text-center xl:text-left"
        >
          <div>
            {{ $t('page.home.copyright') }}
          </div>
          <div class="xl:flex">
            <div class="flex items-center mt-2">
              <img src="/images/public_security.png" alt="public_security" />
              <!-- TODO: use i18n -->
              <span class="ml-2">川公安网备 51010702001785 号 </span>
            </div>
            <!-- TODO: use i18n -->
            <div class="text-gray-50 xl:text-gray-80 xl:ml-2 mt-2">
              蜀ICP备15017503号-2
            </div>
          </div>
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
