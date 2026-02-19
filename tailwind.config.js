/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#f9a406",
        "background-light": "#f8f7f5",
        "background-dark": "#231c0f",
        "background-secondary": "#181611",
        "console-dark": "#18181b",
        "surface-dark": "#231c0f",
        "panel-dark": "#181611",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
