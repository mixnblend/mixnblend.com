/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8232C',
          blue: '#1A5DAB',
          yellow: '#FFD23F',
          teal: '#2EC4B6',
          coral: '#FF6B35',
          purple: '#6B2D8B',
          dark: '#1A1A1A',
          'off-white': '#F5F5F0',
          'warm-grey': '#E8E4DF',
        },
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1A1A1A',
            a: {
              color: '#1A5DAB',
              '&:hover': {
                color: '#C8232C',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
