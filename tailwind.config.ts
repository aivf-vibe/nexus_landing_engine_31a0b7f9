import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        tea: {
          50: '#F7F9F3',
          100: '#E8F0D9',
          200: '#D4E4B5',
          300: '#BFD791',
          400: '#AACA6D',
          500: '#95BD49',
          600: '#77973A',
          700: '#59712C',
          800: '#3C4C1D',
          900: '#1E260F',
        },
      },
    },
  },
  plugins: [],
};

export default config;