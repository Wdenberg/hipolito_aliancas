/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Hipolito Alianças
        primary: {
          light: "#F5D1A3", // bege/dourado claro
          DEFAULT: "#E8B87C", // dourado médio (principal)
          dark: "#C49A6C", // bronze queimado
        },
        secondary: {
          DEFAULT: "#4A3A2C", // marrom escuro (texto principal)
          light: "#6B5845", // marrom médio
        },
        neutral: {
          white: "#FFFFFF", // contraste
        },
      },
    },
  },
  plugins: [],
}
