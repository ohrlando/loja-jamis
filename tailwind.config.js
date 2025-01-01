/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // paleta bege
        'beige-100': '#f5f5dc',
        'beige-200': '#f2e6d9',
        'beige-300': '#e6ccb2',
        'beige-400': '#d9b38c',
        'beige-500': '#cc9966',

        // paleta vinho
        'wine-100': '#faebec',
        'wine-200': '#f4d7d9',
        'wine-300': '#ebbbbe',
        'wine-400': '#df959a',
        'wine-500': '#d36777',
        'wine-600': '#b94f5f',
        'wine-700': '#722f37', // Seu tom de vinho original
        'wine-800': '#5a242b',
        'wine-900': '#431a20',
      },
    },
  },
  plugins: [],
}
