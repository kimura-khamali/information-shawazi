import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#3E1C00", 
        secondary: "#E4960E", 
        white: "#FFFFFF", 
        black: "#000000",
        'secondary-light': 'rgba(228, 150, 14, 0.33)',
        'custom-green': '#508408',
      },
    },
  },
  plugins: [],
};
export default config;
