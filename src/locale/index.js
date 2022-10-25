import i18next from 'i18next'

import { generateInitOptions, transformKey } from './utils'

export const translate = (key, options) => {
  const keys = (Array.isArray(key) ? key : [key]).map(transformKey).flat()

  return i18next.t(keys, options)
}

export default function install(app, options) {
  const initOptions = options.initOptions
    ? options.initOptions
    : generateInitOptions(options.translation)

  i18next.init(initOptions)

  app.config.globalProperties.$t = translate
}
