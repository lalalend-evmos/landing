module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Ilisarniq'],
      serif: ['Ilisarniq'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#92dc7e',
        stieglitz: '#6176A1',
        umbra: '#1E1E1E',
        'wave-blue': '#8AACF4',
        'white-dark': '#F6F9FF',
        'cod-gray': '#0E1119',
      },
      minWidth: {
        400: '400px',
        640: '640px',
      },
      margin: {
        1.75: '0.41rem',
      },
      spacing: {
        84: '21rem',
      },
    },
  },

  plugins: [],
};
