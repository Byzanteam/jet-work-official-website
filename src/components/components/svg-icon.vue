<template>
  <i :innerHTML="svgContent"></i>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  path: { type: String, required: true },
  keepColor: { type: Boolean, default: false },
})

const svgText = ref('')
const svgContent = computed(() =>
  props.keepColor ? svgText.value : changeColor(svgText.value),
)
onMounted(async () => {
  const req = await fetch(props.path)
  svgText.value = await req.text()
})

function changeColor(text) {
  const regexp = /fill=".+?"/g
  return text.replaceAll(regexp, '').replace('<svg', '<svg fill="currentColor"')
}
</script>
