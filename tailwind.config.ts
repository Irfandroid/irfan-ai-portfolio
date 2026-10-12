import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        surface: "#FFFFFF",
        ink: "#18181B",
        muted: "#71717A",
        line: "#E4E4E7",
        clay: "#B45B3C",
      },
      fontFamily: {
        sans: ["var(--body)", "Arial", "sans-serif"],
        display: ["var(--display)", "Arial", "sans-serif"],
        mono: ["var(--mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1360px",
      },
      letterSpacing: {
        editorial: "-0.04em",
      },
    },
  },
  plugins: [typography],
};

export default config;
