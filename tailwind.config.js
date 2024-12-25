/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /text-(green|blue|orange|red)-(400|500|600|700|800)/,
      variants: ['hover'], // Eğer hover ile kullanıyorsanız
    },
    {
      pattern: /bg-(green|blue|orange|red)-(100|600)/,
    },
  ],
}