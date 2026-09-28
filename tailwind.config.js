/** @type {import('tailwindcss').Config} */
module.exports = {
  // Kde Tailwind hleda pouzite tridy
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== ZNACKOVE BARVY YARINOO =====
        ink: "#0A0A0A", // hluboka cerna (pozadi)
        paper: "#F5F5F5", // skoro bila (text)
        accent: "#FF3B1F", // elektricka oranzovo-cervena (akcent)
        smoke: "#7A7A7A", // seda (vedlejsi text)
      },
      fontFamily: {
        // font promenne prichazeji z next/font v app/layout.jsx
        head: ["var(--font-head)", "sans-serif"], // Barlow Condensed (nadpisy)
        body: ["var(--font-body)", "sans-serif"], // Barlow (text)
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      keyframes: {
        // nekonecny marquee (posuvny text)
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-fast": "marquee 14s linear infinite",
      },
    },
  },
  plugins: [],
};
