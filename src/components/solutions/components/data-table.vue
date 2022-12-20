<template>
  <table
    class="block border border-gray-08 rounded-lg w-full overflow-x-scroll my-6"
  >
    <thead class="bg-gray-08">
      <tr>
        <th v-for="head of headers" :key="head" class="p-3">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="content of body"
        :key="content[0]"
        class="border-b border-b-gray-08 last:border-none"
      >
        <td
          v-for="item of content"
          :key="item"
          class="min-w-[250px] p-3 text-gray-60"
        >
          <ListableText :text="item"></ListableText>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import ListableText from './listable-text.vue'

defineProps({
  headers: { type: Object, required: true },
  body: { type: Object, required: true },
})
</script>
