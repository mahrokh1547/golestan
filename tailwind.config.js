/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "mobail": "0px",
        "desktop":"1024px"
      },
    },
  },
  plugins: [],
}

