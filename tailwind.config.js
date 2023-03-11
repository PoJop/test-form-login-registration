/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    divideOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
  },
  theme: {
    screens: {
      'vsm': '375px',
      'msm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        "text-dark": "#20272E",
        "grey-light": "#D2D8E8",
        "grey-main": "#8D97B0",
        "grey-extralight": "#EDF2FF",
        "light": "#CBD5E2",
        "primery-dark": "#3843ED",
        "primery-main": "#4E5AF2",
        "primery-light": "#5E6BF6",
        "primery-extralight": "#DCDEFC",
        "error-main": "#FF776F",
        "secondary-dark": "#6D6BE5",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '1.4xl': '1.4rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '3xl2': '2rem',
        '4xl': '2.625rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
}
