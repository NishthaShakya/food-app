/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-orange': '#ff4c24',
        'custom-white' : '#f5f6f7',
      },
    },
  },
  plugins: [],
}

