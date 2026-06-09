/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        card: '#FFFFFF',
        primary: '#B87A5A',
        'primary-dark': '#9A6347',
        'primary-light': '#D4A88A',
        secondary: '#E8D8C9',
        'secondary-dark': '#D4BCA8',
        ink: '#2F2F2F',
        'ink-light': '#5A5A5A',
        success: '#8DA67A',
        'success-dark': '#6B8A5A',
        warm: '#F5EDE0',
        blush: '#F2E0D4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(184, 122, 90, 0.12)',
        card: '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
        badge: '0 8px 40px rgba(184, 122, 90, 0.25)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
