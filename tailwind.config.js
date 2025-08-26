import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        fredoka: ["Fredoka"],
        fredokalight: ["Fredoka-Light"],
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        flip: {
          "0%": { opacity: "-0.2", transform: "rotateX(0deg)" },
          "50%": { opacity: "0.5", transform: "rotateX(90deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" },
        },
      },
      animation: {
        pop: "pop 0.25s ease-in-out forwards",
        flip: "flip 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [scrollbar],
};
