/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#1a3e3e',
        yellow: '#F2BE22',
        gray: '#FDFDFD'
      },
      spacing: {
        wrapper: '1180px'
      },
      gridTemplateColumns: {
        'gallery-md': 'repeat(auto-fill, minmax(200px, 1fr))',
        'gallery-sm': '150px'
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
};
