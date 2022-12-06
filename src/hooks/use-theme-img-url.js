import { useMediaQuery } from '@vueuse/core'
import { ref, watch } from 'vue'

const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
export function useThemeImgUrl(name) {
  const url = ref()

  watch(
    isPreferredDark,
    value => {
      url.value = value ? `/images/dark/${name}` : `/images/light/${name}`
    },
    {
      immediate: true,
    },
  )

  return url.value
}
