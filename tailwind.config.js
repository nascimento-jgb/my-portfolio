/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['GilroyExtraBold', 'GilroyLight', 'GraphikRegular', 'GraphikSemiBold',
        'GraphikBold']
      },
    },
  },
  plugins: [],
}
