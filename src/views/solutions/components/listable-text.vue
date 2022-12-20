<template>
  <ul v-if="text.includes('- ')" class="list-disc list-inside">
    <li v-for="itemValue of text.split('- ')" :key="itemValue" class="mb-4">
      {{ itemValue }}
    </li>
  </ul>
  <div v-else>
    {{ text }}
  </div>
</template>

<script setup>
defineProps({ text: { type: String, required: true } })
</script>
