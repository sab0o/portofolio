// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This single line covers everything inside the 'app' folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'], // We'll set this up in layout.tsx
      },
    },
  },
  plugins: [],
}