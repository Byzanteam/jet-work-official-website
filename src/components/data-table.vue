<template>
  <table class="border border-gray-08 rounded-lg">
    <thead class="dark:bg-gray-08 bg-gray-03">
      <tr>
        <th v-for="head of headers" :key="head" class="p-3 text-left">
          {{ head }}
        </th>
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
          class="min-w-[200px] p-3 text-gray-60"
        >
          <ul v-if="Array.isArray(item)" class="list-disc list-inside">
            <li v-for="liText of item" :key="liText" class="mb-2">
              {{ liText }}
            </li>
          </ul>
          <div v-else class="w-full">
            {{ item }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  headers: { type: Object, required: true },
  body: { type: Object, required: true },
})
</script>
