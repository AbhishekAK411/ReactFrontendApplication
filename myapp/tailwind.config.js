/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom' : '0 5px 10px rgba(0,0,0,0.5)',
        '3xl' : '0 35px 60px -15px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}

