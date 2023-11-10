
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        screen: { raw: 'screen' },
        print: { raw: 'print' },
      },
      colors: {
        'accent': 'var(--accent)',
        'warn': 'var(--warn)',
        'semantic-red': 'var(--semantic-red)',
        'primary': 'var(--primary)',
        'primary-muted': 'var(--primary-muted)',
        'light-slate': 'var(--light-slate)',
        'main-black': 'var(--main-black)',
      },
      fontFamily: {
        sans: [
          "'Inter', sans-serif",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [],
  safelist: [
    '!bg-gray-100'
  ]
}