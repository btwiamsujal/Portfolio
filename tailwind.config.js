// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',  // <-- PURE BLACK
        foreground: '#ffffff',  // <-- PURE WHITE text

        card: '#0a0a0a',
        'card-foreground': '#ffffff',

        popover: '#0a0a0a',
        'popover-foreground': '#ffffff',

        primary: '#3b82f6',
        'primary-foreground': '#ffffff',

        secondary: '#1f1f1f',
        'secondary-foreground': '#ffffff',

        muted: '#1f1f1f',
        'muted-foreground': '#9ca3af',

        accent: '#1f1f1f',
        'accent-foreground': '#ffffff',

        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',

        border: '#1f1f1f',
        input: '#1f1f1f',
        ring: '#3b82f6',

        'tech-blue': '#3b82f6',
        'tech-blue-light': '#60a5fa',
        'tech-gray': '#4b5563',
        'tech-darker': '#0a0a0a',
        'custom-dark': '#000000',
      },
    },
  },
  plugins: [],
}
