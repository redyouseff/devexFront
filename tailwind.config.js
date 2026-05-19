/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        changa: ['Changa', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kalam: ['Kalam', 'cursive'],
      },
      colors: {
        'custom-green': '#2F5B44',
        'custom-cream': '#FEF9D0',
      },
    },
  },
  plugins: [],
}

