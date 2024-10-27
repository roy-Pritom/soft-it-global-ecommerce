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
        foreground: "var(--foreground)",
        primaryColor: "#FFCA2C",
      },
      container: {
        screens: {
          sm: "600px",
          md: "1024px",
          lg: "1250px"
         
        },
      },
    },
  },
  plugins: [],
};
export default config;
