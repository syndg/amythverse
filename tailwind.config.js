/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
            padding: "1rem",
          },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 150ms ease-out",
        slideUp: "slideUp 150ms ease-out",
      },
    },
  },
  plugins: [],
};
