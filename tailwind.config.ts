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
      container: {
        screens: {
          sm: "640px",    // Small devices (mobile)
          md: "768px",    // Medium devices (tablet)
          lg: "1380px",   // Large devices (laptop)
           // Extra large devices (desktop)

        },
      },
    },
  },
  plugins: [],
};
export default config;
