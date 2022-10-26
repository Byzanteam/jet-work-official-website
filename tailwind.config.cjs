/**
 * numberSpacings = {
 *   0: '0px',
 *   1: '1px',
 *   ...
 *   800: '400px',
 * }
 */
const numberSpacings = Array.from({ length: 801 }).reduce((acc, _, index) => {
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
      lineHeight: {
        34: '34px',
        86: '86px',
      },
      opacity: {
        65: '.65',
      },
      backgroundImage: {
        'gradient-aperture': "url('/images/bg_gradient.png')",
      },
    },
  },
  plugins: [],
}
