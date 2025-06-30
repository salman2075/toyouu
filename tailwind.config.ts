import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        // Custom love story colors
        lavender: "#E6E6FA",
        blush: "#FFB6C1",
        "peach-puff": "#FFDAB9",
        mint: "#F0FFF0",
        "powder-blue": "#B0E0E6",
        navy: "#2C3E50",
        "dark-gray": "#4A5568",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing-script)", "cursive"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

// Add safelist as a separate export to avoid TypeScript issues
export const safelist = [
  // Background colors
  "bg-blush/30",
  "bg-peach-puff/30",
  "bg-mint/30",
  "bg-powder-blue/30",
  "bg-lavender/30",
  "bg-blush/50",
  "bg-peach-puff/50",
  "bg-mint/50",
  "bg-powder-blue/50",
  "bg-lavender/50",
  "bg-blush/20",
  "bg-peach-puff/20",
  "bg-mint/20",
  "bg-powder-blue/20",
  "bg-lavender/20",
  "bg-blush/40",
  "bg-peach-puff/40",
  "bg-mint/40",
  "bg-powder-blue/40",
  "bg-lavender/40",
  "bg-blush/60",
  "bg-peach-puff/60",
  "bg-mint/60",
  "bg-powder-blue/60",
  "bg-lavender/60",
  // Text colors
  "text-lavender",
  "text-blush",
  "text-peach-puff",
  "text-mint",
  "text-powder-blue",
  "text-navy",
  "text-dark-gray",
  // Gradient classes
  "from-lavender",
  "via-mint",
  "to-powder-blue",
  "from-blush",
  "to-peach-puff",
  "from-peach-puff",
  "to-blush",
  "from-powder-blue",
  "to-mint",
  "bg-gradient-to-br",
  "bg-gradient-to-b",
  "bg-gradient-to-r",
  // Border colors
  "border-lavender",
  "border-blush",
  "border-peach-puff",
  "border-mint",
  "border-powder-blue",
  "border-navy",
  "border-dark-gray",
  // Fill colors for icons
  "fill-lavender",
  "fill-blush",
  "fill-peach-puff",
  "fill-mint",
  "fill-powder-blue",
  "fill-navy",
  "fill-dark-gray",
  // Hover background colors
  "hover:bg-blush/30",
  "hover:bg-peach-puff/30",
  "hover:bg-mint/30",
  "hover:bg-powder-blue/30",
  "hover:bg-lavender/30",
  "hover:bg-blush/60",
  "hover:bg-peach-puff/60",
  "hover:bg-mint/60",
  "hover:bg-powder-blue/60",
  "hover:bg-lavender/60",
]

// Merge safelist into config
const configWithSafelist = {
  ...config,
  safelist,
}

export default configWithSafelist
