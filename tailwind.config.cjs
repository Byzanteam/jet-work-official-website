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
      backgroundImage: {
        'gradient-aperture': "url('/images/bg_gradient.png')",
        'work-point': "url('/images/work_bg_point.png')",
      },
      screens: {
        xl: '1320px',
      },
    },
  },
  plugins: [],
}
