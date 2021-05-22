module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          base: '#0a192f',
          light: '#172a45',
          lighter: '#303C55',
        },
        slate: {
          base: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
        },
        brown: {
          400: '#85603f',
        },
        white: {
          400: '#e6f1ff',
        },
        black: {
          DEFAULT: '#000000',
          400: '#000000',
        },
        green: {
          custom: '#64ffda',
        },
        yellow: {
          custom: '#ffcb04',
        },
        'hot-pink': '#fd2d78',
      },
      width: {
        'screen/1.5': 'calc(100vw / 1.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
