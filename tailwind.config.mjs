/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        ink: '#111827',
        muted: '#6b7280',
        accent: '#2563eb',
        surface: '#f9fafb',
        border: '#e5e7eb',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: '#111827',
            a: { color: '#2563eb', textDecoration: 'underline' },
            code: { fontFamily: '"JetBrains Mono", monospace', fontSize: '0.875em' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
