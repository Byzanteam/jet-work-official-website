<template>
  <div class="flex justify-evenly w-full px-0 mb-12">
    <div
      v-for="slot of labelAndComponents"
      :key="slot.label"
      class="py-3"
      :class="
        slot.label === currentLabel
          ? 'text-brand-blue border-b-2 border-b-brand-blue'
          : ''
      "
      @click="() => switchTo(slot.label)"
    >
      {{ slot.label }}
    </div>
  </div>
  <component :is="() => CurrentComponent" />
</template>

<script>
export default {
  name: 'TabSwitch',
}
</script>
<script setup>
import { useSlots, computed, ref } from 'vue'

const slots = useSlots()

const children = slots.default()

const labelAndComponents = computed(() =>
  children.map(slot => ({
    label: slot.props.label,
    component: slot.children.default()[0],
  })),
)

const currentLabel = ref(children[0].props.label)
function switchTo(label) {
  currentLabel.value = label
}
const CurrentComponent = computed(() => {
  return labelAndComponents.value.find(
    item => item.label === currentLabel.value,
  ).component
})
</script>
