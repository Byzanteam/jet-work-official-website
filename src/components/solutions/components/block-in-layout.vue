<template>
  <div class="md:py-14 py-6">
    <h4 class="md:text-[28px] md:leading-[37px] md:mb-14 mb-6 text-center">
      {{ title }}
    </h4>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({ title: { type: String, required: true } })
</script>
