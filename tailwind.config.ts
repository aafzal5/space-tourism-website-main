import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair"],
        barlow: ["Barlow Condensed"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
export default config;
