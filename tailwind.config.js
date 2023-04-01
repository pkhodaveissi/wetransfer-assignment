/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9F0086',
        'txt-primary': '#222222',
        'txt-secondary': '#9A9A9A',
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
