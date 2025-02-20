import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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

        bannerBgColor: "rgb(242,243,242)",
        headingColor: "#45577b",
        whyHireMe: "rgb(70,67,78)"

      },
    },
  },
  plugins: [],
} satisfies Config;
