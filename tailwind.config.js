/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neutral-dark': '#C5B59D', // Slightly darker shade of neutral
        'tertiary': '#69343A', // Added tertiary color
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8A7156",
          "secondary": "#2D2D2D",
          "accent": "#315141",
          "neutral": "#D5C6AD",
          "base-100": "#FAF9F6",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
          "tertiary": "#69343A", // Ensure this matches
        },
      },
    ],
  },
};
