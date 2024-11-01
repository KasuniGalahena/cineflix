import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        primary: '#fab005',
        secondary: '#CAFA05',
        dark: '#141416',
        dark2: '#171717',
        white: '#f4f6fc',
        bgColor1: '#172124',
        bgColor2: '#1a1512',
      },
      contrast: {
        25: '.25',
      },
    },
  },
  plugins: [],
}
export default config
