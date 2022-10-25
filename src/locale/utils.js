import { flowRight, snakeCase } from 'lodash-es'

const SELF_REFERENCE = '__t__'

function normalizeKey(key) {
  const parts = key.split('.')
  return parts
    .map(part => (part === SELF_REFERENCE ? part : snakeCase(part)))
    .join('.')
}

function fallbackKey(key) {
  return key.endsWith(SELF_REFERENCE) ? key : [`${key}.${SELF_REFERENCE}`, key]
}

export const transformKey = flowRight(fallbackKey, normalizeKey)

export function generateInitOptions(translation) {
  const supportedLngs = Object.keys(translation)
  const resources = supportedLngs.reduce((acc, supportedLng) => {
    Object.assign(acc, {
      [supportedLng]: {
        translation: translation[supportedLng],
      },
    })
    return acc
  }, {})

  return {
    lng: supportedLngs[0],
    supportedLngs: supportedLngs,
    resources: resources,
  }
}
