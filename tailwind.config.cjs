/**
 * numberSpacings = {
 *   0: '0px',
 *   1: '1px',
 *   ...
 *   200: '200px',
 * }
 */
const numberSpacings = Array.from({ length: 201 }).reduce((acc, _, index) => {
  acc[`${index}`] = `${index}px`
  return acc
}, {})

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      spacing: {
        ...numberSpacings,
        auto: 'auto',
      },
    },
  },
  plugins: [],
}
