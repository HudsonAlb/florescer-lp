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
          lavender: {
            DEFAULT: "#9F7AEA",
            soft: "#F3E8FF",
            deep: "#6B46C1",
          },
          mint: {
            DEFAULT: "#48BB78",
            soft: "#F0FFF4",
            deep: "#2F855A",
          },
          blue: {
            DEFAULT: "#4299E1",
            soft: "#EBF8FF",
            deep: "#2B6CB0",
          },
          soft: "#F8FAFC",
          accent: "#805AD5",
          text: "#64748B",
          heading: "#1E293B",
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
