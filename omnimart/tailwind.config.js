/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',  // Light Blue
        secondary: '#1e3a8a',  // Dark Blue
        gray: {
          light: '#f3f4f6',
          DEFAULT: '#e5e7eb',
          dark: '#111827',
        },
      },
      fontFamily: {
        body: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '12px',
      },
    },
  },
  plugins: [],
};
