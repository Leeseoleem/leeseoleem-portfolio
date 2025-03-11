/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#0EA5E9",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
          accent: "#8B5CF6",
        },
        gray: {
          white: "#fff",
          10: "#F9FAFB",
          20: "#E5E7EB",
          30: "#9CA3AF",
          40: "#6B7280",
          50: "#4B5563",
          60: "#1F2937",
          font: "#111827",
        },
      },
    },
  },
  plugins: [],
};
