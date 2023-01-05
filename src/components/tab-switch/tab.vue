<template>
  <div
    class="flex md:justify-evenly w-full mb-12 overflow-x-scroll border-b text-gray-60"
  >
    <div
      v-for="slot of labelAndComponents"
      :key="slot.label"
      class="flex-shrink-0 w-max py-3 mx-10 cursor-pointer"
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
