/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0687f5',
          dark: '#0570d1',
          light: '#3da3f7',
        },
      },
    },
  },
  plugins: [],
};
