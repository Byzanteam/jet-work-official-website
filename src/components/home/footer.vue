<template>
  <footer class="bg-gray-08 opacity-8 w-full flex items-center px-360 py-56">
    <div class="flex items-center justify-between px-24 py-10 w-full">
      <div class="flex items-center">
        <div class="w-60 h-60">
          <img src="/images/logo_jet-02.png" alt="logo" />
        </div>
        <div class="text-white opacity-50 w-186 ml-16 leading-snug">
          {{ $t('page.home.address') }}
        </div>
      </div>
      <div class="text-white opacity-50 whitespace-nowrap font-medium">
        {{ $t('page.home.copyright') }}
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
