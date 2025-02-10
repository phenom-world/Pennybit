import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdeee3',
        orange: '#FF6600',
        'light-orange': '#FDEEE3',
        green: '#2EC76B',
        pink: '#F975B8',
      },
      fontFamily: {
        sans: ['DM Serif Display'],
      },
    },
  },
  plugins: [],
} satisfies Config;
