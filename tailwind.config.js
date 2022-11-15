const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        turquoise: 'rgb(124, 254, 240)',
        soft_springgreen: 'rgb(107, 255, 184)',
        medium_springgreen: 'rgb(44, 234, 163)',
        spanish_green: 'rgb(40, 150, 90)',
        hunter_green: 'rgb(42, 96, 65)',
        sage: 'rgb(177, 174, 145)',
        dark_sea_green: 'rgb(149, 191, 143)',
        pistachio: 'rgb(153, 209, 123)',
        umber: '#584d3d',
        artichoke: '#9f956c',
        dark_khaki: '#cbbf7a',
        yellow_crayola: '#f4e87c',
        key_lime: '#ebf38b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
