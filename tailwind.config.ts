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
        "dm-db-element": "#2b3945",
        "dm-vdb-background": "#202c37",
        "lm-vdb-text": "#111517",
        "lm-dg-input": "#858585",
        "lm-vlg-background": "#fafafa",
      },
      transitionProperty: {
        expanded: "transform, visibility, opacity",
      },
    },
  },
  plugins: [],
};
export default config;
