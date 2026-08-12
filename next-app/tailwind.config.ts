import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "var(--clr-gold)",
        goldLight: "var(--clr-gold-light)",
        primary: "var(--clr-primary)",
        dark: "var(--clr-dark)",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
