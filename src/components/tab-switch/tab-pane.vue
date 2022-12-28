<template>
  <slot />
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
})
</script>
