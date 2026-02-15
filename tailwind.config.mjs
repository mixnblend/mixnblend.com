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
          50: '#e6f4ff',
          100: '#bae3ff',
          200: '#8dd2ff',
          300: '#60c1ff',
          400: '#33b0ff',
          500: '#0687f5',
          600: '#0570d1',
          700: '#0459ad',
          800: '#034289',
          900: '#022b65',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#0687f5',
              '&:hover': {
                color: '#0570d1',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
