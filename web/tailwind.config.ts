import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#0E4D65",
      dark: "#1c2120",
      grey: "#464646",
      light: "#EEF1F6",
    },
  },
  plugins: [],
};
export default config;
