/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        "number-headings": ["Libre Franklin"],
        headings: ["Almarai"],
        paragraphs: ["Lexend"],
      },
      colors: {
        "floral-white": "#F8F6F2",
        dark: "#250101",
        maroon: "#800001",
      },
    },
  },
  plugins: [],
};
