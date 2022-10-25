/**
 * numberSpacings = {
 *   0: '0px',
 *   1: '1px',
 *   ...
 *   400: '400px',
 * }
 */
const numberSpacings = Array.from({ length: 401 }).reduce((acc, _, index) => {
  acc[`${index}`] = `${index}px`
  return acc
}, {})

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: 'rgba(255, 255, 255, 0.8)',
          2: 'rgba(255, 255, 255, 0.2)',
          3: 'rgba(255, 255, 255, 0.08)',
        },
        'brand-bule': '#115EF5',
      },
      spacing: {
        ...numberSpacings,
        auto: 'auto',
      },
    },
  },
  plugins: [],
}
