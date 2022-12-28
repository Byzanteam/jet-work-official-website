<template>
  <DataHubTableCard :item="item" :other-item="otherItem" class="w-full" />
</template>

<script>
export default {
  name: 'DataHubInterface',
}
</script>
<script setup>
import DataHubTableCard from './_table-card.vue'

const item = {
  title: '接口列表显示',
  desc: '',
}
const otherItem = {
  title: '接口详情显示',
  desc: '',
}
</script>
