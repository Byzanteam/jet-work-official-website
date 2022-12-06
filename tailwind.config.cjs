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
        'brand-blue': '#115EF5',
      },
      backgroundImage: {
        'work-point': "url('/images/work_bg_point.png')",
      },
      screens: {
        xl: '1320px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
