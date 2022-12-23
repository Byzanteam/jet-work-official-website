<template>
  <footer class="bg-gray-03 dark:bg-gray-08">
    <div class="py-10 md:py-[54px] xl:py-14 content-container">
      <div
        class="flex flex-col xl:flex-row items-center justify-between py-2.5 px-6 gap-6"
      >
        <div class="w-[110px]">
          <img
            src="/images/logo_jet.svg"
            alt="logo"
            class="w-full object-cover"
          />
        </div>
        <div
          class="text-gray-80 text-sm font-medium mt-[34px] xl:mt-0 text-center md:text-center xl:text-left"
        >
          <div>
            {{ $t('page.home.copyright') }}
          </div>
          <div class="flex md:flex-row flex-col mt-2">
            <div class="flex items-center">
              <img src="/images/public_security.png" alt="public_security" />
              <span class="ml-2">{{ $t('page.home.public_security') }}</span>
            </div>
            <div class="text-gray-50 md:ml-2 md:mt-0 mt-2">
              {{ $t('page.home.icp') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  inheritAttrs: false,
}
</script>
