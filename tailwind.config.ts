import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#4b5563',
        grayBold: '#334155',
        black: '#1f2937',
        white: '#e5e7eb',
        orange: '#f97316',
        orangeBold: '#ea580c',
      },
    },
  },
  plugins: [],
};
export default config;
