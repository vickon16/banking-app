import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        ibmPlexSerif: [
          "var(--font-ibm-plex-serif)",
          ...defaultTheme.fontFamily.serif,
        ],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        clamp2Xs: "clamp(0.65rem, 0.85vw, 0.8rem)",
        clampXs: "clamp(0.75rem, 0.9vw, 0.85rem)",
        clampSm: "clamp(0.85rem, 1vw, 1rem)",
        clampMd: "clamp(1rem, 1.2vw, 1.2rem)",
        clampBase: "clamp(1.2rem, 1.5vw, 1.5rem)",
        clampLg: "clamp(1.4rem, 2vw, 2rem)",
        clampXl: "clamp(1.55rem, 2.5vw, 2.5rem)",
        clamp2Xl: "clamp(1.8rem, 3vw, 3rem)",
        clamp3Xl: "clamp(2rem, 3.5vw, 3.5rem)",
      },
      screens: {
        // min-width
        "2xs": { min: "360px" },
        xs: { min: "460px" },
        ...defaultTheme.screens,
        sm: { min: "567px" },
        md: { min: "767px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        "2xl": { min: "1600px" },

        // max-width breakpoints
        "max-2xs": { max: "360px" },
        "max-xs": { max: "460px" },
        "max-sm": { max: "567px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "992px" },
        "max-xl": { max: "1200px" },
        "max-2xl": { max: "1600px" },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;

export default config;
