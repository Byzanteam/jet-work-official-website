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
          '08': 'rgba(255, 255, 255, 0.08)',
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          50: 'rgba(255, 255, 255, 0.5)',
          65: 'rgba(255, 255, 255, 0.65)',
          80: 'rgba(255, 255, 255, 0.8)',
        },
        'brand-bule': '#115EF5',
      },
      spacing: {
        ...numberSpacings,
        auto: 'auto',
      },
      fontSize: {
        '3xl': [
          '32px',
          {
            lineHeight: '45px',
          },
        ],
        '4xl': [
          '40px',
          {
            lineHeight: '56px',
          },
        ],
        '7xl': [
          '72px',
          {
            lineHeight: '86px',
          },
        ],
      },
      lineHeight: {
        22: '22px',
        34: '34px',
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
