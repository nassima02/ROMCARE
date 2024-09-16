/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Assure que Tailwind analyse tes fichiers Angular
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#496569',
        'secondary-green': '#6d99a2',
        'background': '#ece7e6',
      },
      fontSize: {
        'fluid-base': ['clamp(1rem, 0.9rem + 0.4vw, 1.25rem)', {lineHeight: 'clamp(1.5rem, 1.4rem + 0.3vw, 1.75rem)'}],
        'fluid-sm': ['clamp(0.875rem, 0.85rem + 0.2vw, 1rem)', {lineHeight: 'clamp(1.25rem, 1.2rem + 0.2vw, 1.5rem)'}],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.3vw, 1.375rem)', {lineHeight: 'clamp(1.625rem, 1.5rem + 0.35vw, 1.875rem)'}],
        'fluid-xl': ['clamp(1.25rem, 1.125rem + 0.35vw, 1.625rem)', {lineHeight: 'clamp(1.75rem, 1.6rem + 0.4vw, 2rem)'}],
        'fluid-2xl': ['clamp(1.5rem, 1.25rem + 0.45vw, 1.875rem)', {lineHeight: 'clamp(2rem, 1.75rem + 0.5vw, 2.25rem)'}],
        'fluid-3xl': ['clamp(1.875rem, 1.5rem + 0.55vw, 2.375rem)', {lineHeight: 'clamp(2.5rem, 2rem + 0.65vw, 2.75rem)'}],
        'fluid-4xl': ['clamp(2.25rem, 1.75rem + 0.75vw, 2.75rem)', {lineHeight: 'clamp(3rem, 2.5rem + 0.8vw, 3.25rem)'}],
        'fluid-5xl': ['clamp(3rem, 2.25rem + 1vw, 3.75rem)', {lineHeight: 'clamp(3.5rem, 3rem + 1vw, 4rem)'}],
        'fluid-6xl': ['clamp(4rem, 2.75rem + 1.25vw, 4.75rem)', {lineHeight: 'clamp(4.5rem, 3.5rem + 1.25vw, 5.25rem)'}],
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],

};
