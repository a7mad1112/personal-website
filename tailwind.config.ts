import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-700': '#000000',
        'dark-600': '#191919',
        'dark-500': '#404040',
        'dark-100': '#959595',
        'dark-50': '#f2f2f2',
        'red-700': '#FF4305',
        'red-600': '#ff6a05',
        'red-500': '#ff9471',
        'red-300': '#ffbfaa',
        'red-100': '#ffeae3',
        'orange-700': '#ff4305',
        'orange-600': '#ffa639',
        'orange-500': '#ffbf71',
        'orange-300': '#ffd9aa',
        'orange-100': '#fff2e3',
      },
      screens: {
        '2xl': '1536px',
        xxl: '1920px',
      },
      maxWidth: {
        '9xl': '104rem',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        custom:
          '0px 1px 2px 0px rgba(255, 67, 5, 0.15), 0px 4px 4px 0px rgba(255, 67, 5, 0.13), 0px 9px 5px 0px rgba(255, 67, 5, 0.08), 0px 16px 6px 0px rgba(255, 67, 5, 0.02), 0px 25px 7px 0px rgba(255, 67, 5, 0.00)',
        'custom-refined':
          '0px 4px 6px -1px rgba(255, 67, 5, 0.1), 0px 2px 4px -2px rgba(255, 67, 5, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
