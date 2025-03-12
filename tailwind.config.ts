import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    // Rhunda is only available in normal and medium weights, don't use weights with Suisse Works
    fontWeight: {
      normal: "400",
      medium: "500",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-runda)", ...fontFamily.sans],
        serif: ["var(--font-suisse-works-book-italic)", ...fontFamily.serif],
        runda: "var(--font-runda)",
        "suisse-works": "var(--font-suisse-works-book-italic)",
      },
      fontSize: {},
      colors: {
        primary: {
          200: "var(--color-primary-200)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },

        // Brand Colors
        "sky-blue": "var(--color-primary-200)",
        "new-energy-blue": "var(--color-primary-500)",
        "midnight-blue": "var(--color-primary-900)",

        // Specialty Colors
        "brick-dust": "var(--color-brick-dust)",
        admirality: "var(--color-admirality)",
        "canyon-blue": "var(--color-canyon-blue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
