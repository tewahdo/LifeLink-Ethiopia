/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // catches everything inside src
    "./pages/**/*.{js,ts,jsx,tsx}",   // if you use pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // optional but safe
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
