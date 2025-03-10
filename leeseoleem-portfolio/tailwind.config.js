/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#3B82F6",
          accentTeal: "#0EA5E9",
          deepNavy: "#1E40AF",
          teal: "#10B981",
          purple: "#8B5CF6",
          gray: {
            white: "#fff",
            10: "#F9FAFB",
            20: "#E5E7EB",
            30: "#9CA3AF",
            40: "#6B7280",
            50: "#4B5563",
            60: "#1F2937",
            70: "#111827",
          },
        },
      },
    },
  },
  plugins: [],
};
