<template>
  <div class="md:py-14 py-6">
    <h4 class="md:mb-8 mb-6 text-center">
      {{ title }}
    </h4>
    <slot />
  </div>
</template>

<script setup>
defineProps({ title: { type: String, required: true } })
</script>
