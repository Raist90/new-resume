import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkBGPrimary: 'var(--dark-color)',
        darkTextPrimary: 'var(--dark-text-color)',
        darkAccent: 'var(--dark-accent-color)',
        lightBGPrimary: 'var(--light-color)',
        lightTextPrimary: 'var(--light-text-color)',
        lightAccent: 'var(--light-accent-color)',
      },
    },
  },
  plugins: [],
}
export default config
