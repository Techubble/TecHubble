/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        accent: '#f5c518',
        'accent-hover': '#e6b800',
        border: '#1a1a1a',
        'border-hover': '#333',
        muted: '#888',
        dim: '#555',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
