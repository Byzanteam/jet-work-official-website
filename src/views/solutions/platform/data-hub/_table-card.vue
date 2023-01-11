<template>
  <div
    class="flex flex-col justify-between md:p-12 p-6 rounded-lg dark:bg-gray-08 bg-gray-03"
  >
    <div>
      <h5 class="mb-8">{{ item.title }}</h5>
      <div>{{ item.desc }}</div>
      <template v-if="otherItem">
        <h5 class="mb-8 mt-14">{{ item.title }}</h5>
        <div>{{ item.desc }}</div>
      </template>
    </div>

    <img v-if="item.img" :src="item.img" alt="" class="pt-8 mx-auto" />
  </div>
</template>

<script>
export default {
  name: 'DataHubCard',
}
</script>
<script setup>
defineProps({
  item: { type: Object, required: true },
  otherItem: { type: Object, default: undefined },
})
</script>
