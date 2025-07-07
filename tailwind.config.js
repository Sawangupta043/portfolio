/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#0F2027',
          medium: '#203A43',
          light: '#2C5364',
        },
        accent: {
          teal: '#00C9A7',
          blue: '#42CEFF',
          darkBlue: '#0099CC',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
        'button-gradient': 'linear-gradient(135deg, #42CEFF, #0099CC)',
        'accent-gradient': 'linear-gradient(135deg, #00C9A7, #42CEFF)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeInDelay 1s ease-out 0.5s both',
        'fade-in-delay-2': 'fadeInDelay2 1s ease-out 1s both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 201, 167, 0.5)',
        'glow-blue': '0 0 20px rgba(66, 206, 255, 0.5)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};