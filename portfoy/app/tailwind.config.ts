import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#727272",
        secondary: "#0c0c0d",
        tertiary: "#111",
        borderColor: "#3e3e3e",
      },
    },
  },
  plugins: [],
} satisfies Config;
