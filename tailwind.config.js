module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f75b27', // ou algo como #ff4c29
        background: '#0f172a',
        surface: '#1e293b',
      },
    },
  },
  plugins: [],
}
