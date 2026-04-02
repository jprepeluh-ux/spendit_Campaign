/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#438230',
          'green-light': '#5AAE41',
          bg: '#F8FCF8',
          text: '#3D3D3D',
          blue: '#535fed',
        },
      },
      fontFamily: {
        headline: ['"ES Rebond Grotesque Trial"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'cta': '0px 4px 12.1px 0px rgba(51, 102, 35, 0.25)',
        'card': '0 8px 40px rgba(0,0,0,0.08)',
        'card-lg': '0 16px 60px rgba(0,0,0,0.10)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
