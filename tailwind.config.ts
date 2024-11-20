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
        primaryColor: "#808000",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      container: {
        center: true, // Center the container by default
        padding: "1rem", // Add padding for small screens
        screens: {
          sm: "640px", // Small devices (mobile)
          md: "768px", // Medium devices (tablet)
          lg: "1380px", // Large devices (laptop)
          xl: "1600px", // Extra large devices (desktop)
        },
      },
    },
  },
  plugins: [],
};
export default config;
