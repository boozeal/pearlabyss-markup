import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "#FBA250",
          blue: "#2E4072",
          gray: "#F2F2F2",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        line: "#F2F2F2",
        titleBlack: "#282828",
        iconBlack: "#545454",
        baseLine: "#F2F2F2",
        lightGray: "#C9C9C9",
        inActive: "#888888",
        contentBlack: "#3F3F3F",
        buttonLine: "#FA973B",
        backgroundGray: "#F9F9F9",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "accordion-down 0.2s ease-out",
        "collapsible-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
